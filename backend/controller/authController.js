const AuthUser = require("../model/authUserModel");

async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        const existingUser = await AuthUser.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ msg: "Email already registered." });
        }

        const user = await AuthUser.create({
            name,
            email: email.toLowerCase(),
            password,
            role: "user",
        });

        return res.status(201).json({
            msg: "Account created successfully.",
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong." });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await AuthUser.findOne({ email: email?.toLowerCase() });

        if (!user || user.password !== password || user.role !== "user") {
            return res.status(401).json({ msg: "Invalid user login details." });
        }

        return res.status(200).json({
            msg: "Login successful.",
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong." });
    }
}

async function loginAdmin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await AuthUser.findOne({ email: email?.toLowerCase() });

        if (!user || user.password !== password || user.role !== "admin") {
            return res.status(401).json({ msg: "Invalid admin login details." });
        }

        return res.status(200).json({
            msg: "Login successful.",
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong." });
    }
}

module.exports = { registerUser, loginUser, loginAdmin };
