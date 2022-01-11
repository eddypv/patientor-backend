import { Router } from "express";
import patientService from "../services/patientService";
import { toNewPatient } from "../data/utils";
const router = Router(); 
router.get('/', (_req, res) =>{
    res.send(patientService.getPatientsNoSensitive());
});
router.post('/', (req, res) =>{
    const newPatient = toNewPatient(req.body);
    const patient = patientService.addPatient(newPatient);
    return res.json(patient);
});

export default router;