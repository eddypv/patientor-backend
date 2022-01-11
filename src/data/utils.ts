/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NewPatient } from "../types";

export const toNewPatient = (object:any): NewPatient =>{
    const newPatient:NewPatient ={
        name:object.name,
        gender:object.gender,
        occupation:object.occupation,
        dateOfBirth:object.dateOfBirth,
        ssn:object.ssn
    };
    return newPatient;
};

