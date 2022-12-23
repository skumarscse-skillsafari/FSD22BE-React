import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();
export const registerRoute = async (req, res) => {
  try {
    const registrationData = req.body; // { name:..., email:..., password: }
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const encryptedData = { ...registrationData, password: newPassword };
    const registeredData = new User(encryptedData);
    await registeredData.save();
    res.status(200).json({
      success: true,
      data: registeredData,
      msg: "User registered successfully",
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: error, msg: "Something went wrong" });
  }
};

export const loginRoute = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    // console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, msg: `User with email: ${email} not found` });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign(
        { name: user.name, email: user.email },
        process.env.KEY
      );
      return res.status(200).json({
        success: true,
        token: token,
        msg: "User verified successfully",
      });
    } else {
      return res.status(400).json({ success: false, msg: "Password invalid" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: error, msg: "Something went wrong" });
  }
};

export const getContentRoute = async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.KEY);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    return res.status(200).json({ success: true, content: user.content });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Invalid jwt token" });
  }
};

export const postContentRoute = async (req, res) => {
  const token = req.headers["x-access-token"]; // const headers = { x-access-token: "jwt_generated_token"}
  try {
    const decoded = jwt.verify(token, process.env.KEY); // { "name": "SkillSafari", "email": "info@skillsafari.in", "iat": 1671808062 }
    const email = decoded.email;
    User.updateOne({ email: email }, { $set: { content: req.body.content } });
    return res
      .status(200)
      .json({ success: true, msg: "Content added successfully" });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Invalid jwt token" });
  }
};
