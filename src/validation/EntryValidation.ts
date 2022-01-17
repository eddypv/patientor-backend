/* eslint-disable @typescript-eslint/no-explicit-any */
import { Diagnose, Discharge, Entry, HealthCheckEntry, HospitalEntry, OccupationalHealthCareEntry, SickLeave } from "../types";
import { parseDate, parseString, parseArrayString, parseInt } from "./utils";
import {v1 as uuid} from 'uuid';

const parseDiagnosisCodes = (codes :unknown, messageError:string): Diagnose["code"][] =>{
    if(!codes){
        return [];
    }
    return parseArrayString(codes, messageError);
};

const parseDischarge =(value:any):Discharge =>{
    if(!value){
        throw new Error("missing discharge");
    }
    const discharge:Discharge ={
        "date": parseDate(value.date, "Incorrect or missing date discharge"), 
        "criteria":parseString(value.criteria, "Incorrect or missing criteria discharge")
    
    };
    return discharge;

};
const parseSickLeave = (value:any):SickLeave | undefined =>{
    if(!value){
        return undefined;
    }
    const sickLeave :SickLeave ={
        "startDate":parseDate(value.startDate , "Incorrect or missing startDate sickLeave"),
        "endDate":parseDate(value.endDate , "Incorrect or missing endDate sickLeave"),
    };
    return sickLeave;
};


export const toNewEntry = (object:any):Entry =>{
    const id = uuid();
    switch(object.type){
        case "HealthCheck":
            const HealthCheck:HealthCheckEntry= {
                type:"HealthCheck",
                "id":id,
                "date": parseDate(object.date, "Incorrect or missing date"),
                "description":parseString(object.description, "Incorrect or missing description"),
                "specialist": parseString(object.specialist, "Incorrect or missing specialist"),
                "diagnosisCodes": parseDiagnosisCodes(object.diagnosisCodes, "Incorrect or missing diagnosis Codes"),
                "healthCheckRating":parseInt(object.healthCheckRating, "Incorrect or missing healthCheckRating")
        
            }; 
            return HealthCheck;

        case "Hospital":
            const hospital:HospitalEntry= {
                type:"Hospital",
                "id":id,
                "date": parseDate(object.date, "Incorrect or missing date"),
                "description":parseString(object.description, "Incorrect or missing description"),
                "specialist": parseString(object.specialist, "Incorrect or missing specialist"),
                "diagnosisCodes": parseDiagnosisCodes(object.diagnosisCodes, "Incorrect or missing diagnosis Codes"),
                "discharge":parseDischarge(object.discharge)
            }; 
            return hospital;

        case "OccupationalHealthcare":
            const occupational:OccupationalHealthCareEntry ={
                type:"OccupationalHealthcare",
                "id":id,
                "date": parseDate(object.date, "Incorrect or missing date"),
                "description":parseString(object.description, "Incorrect or missing description"),
                "specialist": parseString(object.specialist, "Incorrect or missing specialist"),
                "diagnosisCodes": parseDiagnosisCodes(object.diagnosisCodes, "Incorrect or missing diagnosis Codes"),
                "employerName": parseString(object.employerName, "Incorrect or missing Employer Name")
            };
            const sickLeave = parseSickLeave(object.sickLeave);
            if(sickLeave){
                occupational.sickLeave = sickLeave;
            }
            return occupational;     
        
        default: 
            throw new Error("Not found entry type");

    }

};