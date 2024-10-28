
const express = require('express');
const app = express();

const swaggerSetup = require('./utils/swagger');

app.use(express.json());

app.use('/doctors', require('./routes/doctorRoutes'));
app.use('/appointments', require('./routes/appointmentRoutes'));

swaggerSetup(app);

module.exports = app;
