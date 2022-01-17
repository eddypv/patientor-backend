/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender, NewPatient } from "../types";
import { parseString, parseDate } from "./utils";

const isGender = (gender:any): gender is Gender =>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return [Gender.FEMALE, Gender.MALE].includes(gender);
};
const parseGender = ( gender:unknown) :Gender=>{
    if(!gender || !isGender(gender)){
        throw new Error("Incorrect or missing gender");
    }
    return gender;
} ;

export const toNewPatient = (object:any): NewPatient =>{
    const newPatient:NewPatient ={
        name:parseString(object.name, "Incorrect or missing name") ,
        gender: parseGender(object.gender),
        occupation:parseString(object.occupation, "Incorrect or missing occupation"),
        dateOfBirth:parseDate(object.dateOfBirth, "Incorrect or missing dateOfBirth"),
        ssn:parseString(object.ssn, "Incorrect or missing ssn")
    };
    return newPatient;
};