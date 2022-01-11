import { PatientNoSensitive, Patient } from "../types";
import patientData from '../data/patients.json';

const patients :Array<Patient> = patientData as Array<Patient>;

const getPatients =() :Array<Patient> =>{
    return patients;
};

const getPatientsNoSensitive =() :Array<PatientNoSensitive> =>{
    return patients. map(({id, name, gender, occupation, dateOfBirth}) => ({id, name, gender, occupation, dateOfBirth}));
};

export default {
    getPatients,
    getPatientsNoSensitive
};
