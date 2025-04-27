import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
};

export default authenticate;
