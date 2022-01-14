import { Router } from "express";
import patientService from "../services/patientService";
import { toNewPatient } from "../data/utils";
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

export default router;