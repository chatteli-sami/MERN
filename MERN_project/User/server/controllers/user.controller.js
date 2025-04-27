import User from "../models/user.model.js";
import extractValidationErrors from "../utils/errorExtractor.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const UserController = {
  register: async (req, res) => {
    User.create(req.body)
      .then((user) => {
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRET_KEY
        );

        res
          .cookie("usertoken", userToken, secret, {
            httpOnly: true,
          })
          .json({ msg: "success!", user: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          succes: false,
          message: "Failed to Register ",
          errors: extractValidationErrors(error),
        });
      });
  },

  login: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      return res.sendStatus(400);
    }
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SCRECT_KEY
    );
    res
      .cookie("usertoken", userToken, secret, {
        httpOnly: true,
      })
      .json({ msg: "success!" });
  },

  logout: async (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  },

  getAll: async (req, res) => {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (err) {
      console.log(err);
      res.status(404).json(err);
    }
  },
};

export default UserController;
