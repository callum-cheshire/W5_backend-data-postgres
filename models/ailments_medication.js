const { query } = require("../db/index");

async function getAllAilments() {
  const result = await query("SELECT * FROM ailments_medication;");
  const allAilments = result.rows;
  return allAilments;
}

async function getAilmentByID(id) {
  const result = await query(`SELECT * FROM ailments_medication WHERE id = $1;`, [id]);
  const ailment = result.rows[0];
  return ailment;
}





module.exports = {
    getAllAilments,
    getAilmentByID,
    // createPatient,
    // updatePatientByID,
    // deletePatientByID
  };
  