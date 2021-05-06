class AuthenticateJwt {
    authenticateJWT(req, res, next) {
      try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, "secretKey");
        next();
      } catch (err) {
        res.send("Token Expired");
      }
    }
  }
  
  module.exports = AuthenticateJwt;