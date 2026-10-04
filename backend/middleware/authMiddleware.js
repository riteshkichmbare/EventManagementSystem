function checkRole(role) {
    return (req, res, next) => {

        const userRole =
            req.body?.role ||
            req.headers["x-user-role"];

        if (!userRole) {
            return res.status(401).json({
                msg: "Login required."
            });
        }

        if (userRole !== role) {
            return res.status(403).json({
                msg: "Access denied."
            });
        }

        next();
    };
}

module.exports = { checkRole };