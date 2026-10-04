function checkRole(role) {
    return (req, res, next) => {
        if (!req.body.role && !req.headers["x-user-role"]) {
            return res.status(401).json({ msg: "Login required." });
        }

        const userRole = req.body.role || req.headers["x-user-role"];
        if (userRole !== role) {
            return res.status(403).json({ msg: "Access denied." });
        }

        next();
    };
}

module.exports = { checkRole };
