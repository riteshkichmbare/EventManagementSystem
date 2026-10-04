const Registration = require("../model/registrationModel");

async function createRegistration(req, res) {
    try {
        const body = req.body;

        if (!body.user_id || !body.event_id || !body.name || !body.email || !body.phone || !body.seats) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        const registration = await Registration.create(body);
        return res.status(201).json({ msg: "Event registration successful.", registration });
    } catch (error) {
        return res.status(500).json({ msg: "Could not register for event." });
    }
}

async function getAllRegistrations(req, res) {
    try {
        const registrations = await Registration.find().populate("event_id").sort({ createdAt: -1 });
        return res.status(200).json(registrations);
    } catch (error) {
        return res.status(500).json({ msg: "Could not load registrations." });
    }
}

async function getMyRegistrations(req, res) {
    try {
        const registrations = await Registration.find({ user_id: req.params.userId }).populate("event_id").sort({ createdAt: -1 });
        return res.status(200).json(registrations);
    } catch (error) {
        return res.status(500).json({ msg: "Could not load bookings." });
    }
}

module.exports = { createRegistration, getAllRegistrations, getMyRegistrations };
