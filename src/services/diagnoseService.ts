import { Diagnose } from "../types";
import diagnosesData  from '../data/diagnoses.json';

const diagnoses:Array<Diagnose> = diagnosesData as Array<Diagnose>;

const getDiagnoses = ():Array<Diagnose> =>{
    return diagnoses;
};

export default { getDiagnoses};