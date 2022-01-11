import { Router } from "express";
import patientService from "../services/patientService";

const router = Router(); 
router.get('/', (_req, res) =>{
    res.send(patientService.getPatientsNoSensitive());
});

export default router;