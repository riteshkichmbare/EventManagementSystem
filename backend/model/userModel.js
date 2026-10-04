const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, },
        description: { type: String, required: true, },
        date: { type: Date, required: true, },
        time: { type: String, required: true, },
        venue: { type: String, required: true, },
        category: { type: String, required: true, },
        cover_image: { type: String, required: true, },
    },
    { versionKey: false, timestamps: true });

const User = mongoose.model("Users", userSchema);

module.exports = User; 