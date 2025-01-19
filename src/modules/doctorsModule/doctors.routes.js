import { Router } from "express";
import doctorsController from "./doctors.controller.js";

const doctorRouter = Router();

SpecialtyRouter.post("/addDoctor", doctorsController.addDoctor);

export default doctorRouter;