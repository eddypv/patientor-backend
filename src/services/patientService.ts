import { PatientNoSensitive, Patient, NewPatient } from "../types";
import patientData from '../data/patients';
import {v1 as uuid} from 'uuid';

const patients :Array<Patient> = patientData ;

const getPatients =() :Array<Patient> =>{
    return patients;
};

const getPatientsNoSensitive =() :Array<PatientNoSensitive> =>{
    return patients. map(({id, name, gender, occupation, dateOfBirth}) => ({id, name, gender, occupation, dateOfBirth}));
};
const addPatient = (patient: NewPatient) :Patient=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id = uuid() ;
    const newPatient :Patient = {
        id: id,
        name:patient.name,
        gender:patient.gender,
        occupation:patient.occupation,
        dateOfBirth:patient.dateOfBirth,
        ssn:patient.ssn,
        entries:[]

    };
    patients.push(newPatient);
    return newPatient;
};
const getPatient = (id:string):Patient | undefined =>{
    const patient = patients.find((element) => element.id === id );
    
    return patient;
};

export default {
    getPatients,
    getPatientsNoSensitive,
    addPatient,
    getPatient
};
