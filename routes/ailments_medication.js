const express = require("express");
const ailmentsRouter = express.Router();

const {
    getAllAilments,
    getAilmentByID,
    // createPatient,
    // updatePatientByID,
    // deletePatientByID,
  } = require("../models/ailments_medication");

  ailmentsRouter.get("/", async function (req, res) {
    const allAilments = await getAllAilments();
    res.status(200).json(allAilments);
  });

  ailmentsRouter.get("/:id", async function (req, res) {
    const ailmentById = await getAilmentByID(req.params.id);
    res.status(200).json(ailmentById);
  });


module.exports = ailmentsRouter;
