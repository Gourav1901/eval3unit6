// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const roleAuth = require('../middleware/roleMiddleware');

router.post('/', roleAuth(['user', 'admin']), appointmentController.createAppointment);
router.put('/:id/approve', roleAuth(['admin']), appointmentController.approveAppointment);

module.exports = router;
