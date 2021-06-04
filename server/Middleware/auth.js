const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(405);
            }
            console.log(user);
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};