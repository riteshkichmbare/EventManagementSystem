const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUsers", required: true },
        event_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        seats: { type: Number, required: true, min: 1 },
    },
    { versionKey: false, timestamps: true }
);

const Registration = mongoose.model("Registrations", registrationSchema);

module.exports = Registration;
