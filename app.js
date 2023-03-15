const express = require("express");
const morgan = require("morgan");
const patientsRouter = require("./routes/patients");
const ailmentsRouter = require("./routes/ailments_medication");
const app = express();
const PORT = process.env.port || 3000;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/patients", patientsRouter);
app.use("/api/ailments", ailmentsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});