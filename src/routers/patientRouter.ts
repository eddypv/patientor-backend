import { Router } from "express";
import patientService from "../services/patientService";
// import { toNewPatient} from "../data/utils";
import { Entry } from "../types";
import { toNewEntry } from "../validation/EntryValidation";
import { toNewPatient } from "../validation/PatientValidation";
const router = Router(); 

router.get('/', (_req, res) =>{
    res.send(patientService.getPatientsNoSensitive());
});
router.post('/', (req, res) =>{
    try{
        const newPatient = toNewPatient(req.body);
        const patient = patientService.addPatient(newPatient);
        res.json(patient);
    }catch(error:unknown){
        let messageError = 'Something went wrong. ';  
        if(error instanceof Error){
            messageError += 'Error:' + error.message;

        }
        res.status(400).send({"error":messageError});
    }
    
});
router.get('/:id', (req, res)=>{
    const patient = patientService.getPatient(req.params.id);
    if(patient){
        res.json(patient);
    }else{
        res.status(400).send({"error":"Not found patient"});
    }
    
});
router.post('/:id/entries', (req, res) =>{

    try{
        const entry:Entry = toNewEntry(req.body);
        const newEntry = patientService.addEntryPatient(req.params.id, entry);
        if(newEntry){
            res.json(newEntry);
        }else{
            res.status(404).send({"error":"not found patient"});
        }
    }catch(error:unknown){
        if(error instanceof Error){
            res.status(400).send({"error":error.message});
        }else{
            res.status(400).send({"error":"Something went wrong."});
        }
    }
    
    
});

export default router;