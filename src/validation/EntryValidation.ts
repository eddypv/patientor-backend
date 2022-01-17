import { Entry, HealthCheckEntry } from "../types";
import { parseDate, parseString, parseArray, parseInt } from "./utils";
import {v1 as uuid} from 'uuid';

export const toNewEntry = (object:any):Entry =>{
    const id = uuid();
    switch(object.type){
        case "HealthCheck":
            const entry:HealthCheckEntry = {
                type:"HealthCheck",
                "id":id,
                "date": parseDate(object.date, "Incorrect or missing date"),
                "description":parseString(object.description, "Incorrect or missing description"),
                "specialist": parseString(object.specialist, "Incorrect or missing specialist"),
                "diagnosisCodes": parseArray(object.diagnosisCodes, "Incorrect or missing diagnosis Codes"),
                "healthCheckRating":parseInt(object.healthCheckRating, "Incorrect or missing healthCheckRating")
        
            }; 
            return entry;
        default: 
            throw new Error("error");

    }

};