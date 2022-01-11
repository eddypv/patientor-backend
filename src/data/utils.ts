/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NewPatient, Gender } from "../types";

const isString = (text:unknown): text is string =>{
    return typeof text === 'string' || text instanceof String;
};
const parseName = (name:unknown) :string =>{
    if(!name || !isString(name)){
        throw new Error("Incorrect or missing name");
    }
    return name;
};
const parseOccupation = (occupation:unknown) :string =>{
    if(!occupation || !isString(occupation)){
        throw new Error("Incorrect or missing occupation");
    }
    return occupation;
};
const parseSsn = (ssn:unknown) :string =>{
    if(!ssn || !isString(ssn)){
        throw new Error("Incorrect or missing ssn");
    }
    return ssn;
};
const isDate = (date:string):boolean =>{
    return Boolean(Date.parse(date));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDate = (date:any):string =>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if(!date || !isString(date) || !isDate(date)){
        throw new Error("Incorrect or missing dateOfBirth");
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return date;
};
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
        name:parseName(object.name) ,
        gender: parseGender(object.gender),
        occupation:parseOccupation(object.occupation),
        dateOfBirth:parseDate(object.dateOfBirth),
        ssn:parseSsn(object.ssn)
    };
    return newPatient;
};

