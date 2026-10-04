const mongoose = require("mongoose");

const authUserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
    },
    { versionKey: false, timestamps: true }
);

const AuthUser = mongoose.model("AuthUsers", authUserSchema);

module.exports = AuthUser;
