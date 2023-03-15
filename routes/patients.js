const express = require("express");
const patientsRouter = express.Router();

const {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatientByID,
  deletePatientByID,
} = require("../models/patients");

patientsRouter.get("/", async function (req, res) {
  const allPatients = await getAllPatients();
  res.status(200).json(allPatients);
});

patientsRouter.get("/:id", async function (req, res) {
  const patientById = await getPatientByID(req.params.id);
  res.status(200).json(patientById);
});

patientsRouter.post("/", async function (req, res) {
  const newPatient = req.body;
  const result = await createPatient(newPatient);
  res.status(200).json({ success: true, payload: result });
});

patientsRouter.put("/:id", async function (req, res) {
  const updatedPatient = await updatePatientByID(req.params.id, req.body)
  res.status(200).json(updatedPatient);
})

patientsRouter.delete("/:id", async function (req, res) {
  const deletePatient = await deletePatientByID(req.params.id)
  res.status(200).json(deletePatient);
})

module.exports = patientsRouter;
