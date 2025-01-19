import { Router } from "express";
import specialtyController from "./specialty.controller.js";

const SpecialtyRouter = Router();

SpecialtyRouter.post("/createSpecialty", specialtyController.addSpecialty);

export default SpecialtyRouter;