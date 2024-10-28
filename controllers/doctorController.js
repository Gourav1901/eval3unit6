const Doctor = require('../models/Doctor');

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find(req.query);
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
