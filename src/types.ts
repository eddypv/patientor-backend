export enum Gender {
    MALE='male',
    FEMALE='female'
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry{

}
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