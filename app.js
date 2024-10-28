
const express = require('express');
const app = express();

const swaggerSetup = require('./utils/swagger');

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Home page for hospital management system")
})


app.use('/doctors', require('./routes/doctorRoutes'));
app.use('/appointments', require('./routes/appointmentRoutes'));

swaggerSetup(app);

module.exports = app;
