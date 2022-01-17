import { Entry, HealthCheckEntry, HospitalEntry } from "../types";
import { parseDate, parseString, parseArray, parseInt } from "./utils";
import {v1 as uuid} from 'uuid';

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
                "diagnosisCodes": parseArray(object.diagnosisCodes, "Incorrect or missing diagnosis Codes"),
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
                "diagnosisCodes": parseArray(object.diagnosisCodes, "Incorrect or missing diagnosis Codes"),
                "discharge":{
                    "date": parseDate(object.discharge.date, "Incorrect or missing date discharge"), 
                    "criteria":parseString(object.discharge.criteria, "Incorrect or missing criteria discharge")
                }
            }; 
            return hospital;
            

        default: 
            throw new Error("error");

    }

};