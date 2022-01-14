export enum Gender {
    MALE='male',
    FEMALE='female'
}
enum HealthCheckRating{
    "Healthy"=0,
    "LowRisk"=1,
    "HighRisk"=2,
    "CriticalRisk"=3
}
interface BaseEntry{
    id:string,
    description:string,
    date:string,
    specialist:string,
    diagnosisCodes?:Array<Diagnose['code']>
}
interface Discharge{
    date:string,
    criteria:string
}
interface SickLeave{
    startDate:string,
    endDate:string,
}
interface HealthCheckEntry extends BaseEntry{
    type:"HealthCheck",
    healthCheckRating :HealthCheckRating
}
interface HospitalEntry extends BaseEntry{
    type:"Hospital",
    discharge: Discharge
}
interface OccupationalHealthCareEntry extends BaseEntry{
    type:"OccupationalHealthCare",
    sickLeave:SickLeave
}
type Entry = HealthCheckEntry | HospitalEntry | OccupationalHealthCareEntry;

export interface Diagnose{
    code:string,
    name:string,
    latin?:string
}
export interface Patient{
    id:string,
    name:string,
    dateOfBirth:string,
    ssn:string,
    gender:Gender,
    occupation:string,
    entries:Entry[]
}
export type PatientNoSensitive = Omit<Patient, "ssn"| "entries">;
export type NewPatient = Omit<Patient, "id"|"entries">;