const { query } = require("../db/index");

async function getAllPatients() {
  const result = await query("SELECT * FROM patients;");
  const allPatients = result.rows;
  return allPatients;
}

async function getPatientByID(id) {
  const result = await query(`SELECT * FROM patients WHERE id = $1;`, [id]);
  const patient = result.rows[0];
  return patient;
}

async function createPatient(patient) {
  const result = await query(
    `INSERT INTO patients (first_name, last_name, age, sex)
  VALUES ($1, $2, $3, $4) RETURNING * `,
    [patient.first_name, patient.last_name, patient.age, patient.sex]
  );
  return result.rows;
}

async function updatePatientByID(id, patient) {
    const result = await query(`UPDATE patients SET "first_name" = $2, "last_name" = $3, "age" = $4, "sex" = $5 WHERE id = $1 RETURNING *`, [id, patient.first_name, patient.last_name, patient.age, patient.sex]);
    return result.rows;
}

async function deletePatientByID(id) {
  const deletedAilments = await query(`DELETE FROM ailments_medication WHERE id = $1 RETURNING *`, [id]);
  const deletedPatient = await query(`DELETE FROM patients WHERE id = $1 RETURNING *`, [id]);
  const fullDeleted = deletedPatient.rows + deletedAilments.rows;
  return fullDeleted; 
}

module.exports = {
  getAllPatients,
  getPatientByID,
  createPatient,
  updatePatientByID,
  deletePatientByID
};
