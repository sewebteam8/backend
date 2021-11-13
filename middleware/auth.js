import jwt from 'jsonwebtoken';
export default (req, res, next) => {
    // const token = req.header('x-auth-token');
     const token = req.headers.authorization
     if (!token ) {
         return res.status(401).end()
    }
    
    // Check for token
    if (!token)
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    console.log(token);
    try {
        // Verify token
        const decoded = jwt.verify(token, "studywellraj");
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({
            msg: 'Token is not valid'
        });
    }
};