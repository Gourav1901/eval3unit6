// controllers/appointmentController.js
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({ ...req.body, user: req.user.id });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const approveAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    appointment.status = req.body.status;
    await appointment.save();
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createAppointment, approveAppointment };
