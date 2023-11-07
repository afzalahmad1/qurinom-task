import {User} from "../models/User.js";
import {Merchent} from "../models/Merchent.js";
import jwt from "jsonwebtoken";
import { verifyEmail } from "../utils/verifyEmail.js";

const register = async (req, res) => {
  const userBody = req.body;
  // console.log(userBody);
  try {
    if (!userBody.name || !userBody.email || !userBody.password) {
      res.send({
        status: 400,
        message: "All Fields Are Mandatory",
      });
      return;
    }
    const userExists = await verifyEmail(userBody.email, userBody.type);

    if (userExists === "E") {
      res.send({ status: 400, message: "Email already exists" });
      return;
    }

    if (userBody.type === "user") {
      const userObj = new User({
        name: userBody.name,
        password: userBody.password,
        email: userBody.email,
      });

      await userObj.save();

      res.send({
        status: 201,
        message: "User has been created!",
      });
    } else {
      const userObj = new Merchent({
        name: userBody.name,
        password: userBody.password,
        email: userBody.email,
      });

      await userObj.save();

      res.send({
        status: 201,
        message: "New Merchant has been created!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  // console.log(req.body);
  const { email, password, type } = req.body;
  let payload = {
    email,
    type
  }
  let token = await jwt.sign(payload, process.env.JWT_SECRET);
//   console.log(token);
  let userData;
  try {
    if(type === 'user'){
        userData = await User.findOne({ email });
        // console.log("user");
    }else{
        // console.log("merchant");
        userData = await Merchent.findOne({ email });
    }
    // console.log(userData);
    if (!userData) {
      return res.send({
        status: 400,
        message: "No user found! Please register",
      });
    }
   if(userData.password !== password){
    res.send({
        message: 'Incorrect Password'
    })
    return;
   }

    res.send({
      status: 200,
      token: token,
      message: "Login Success",
    });
  } catch (error) {
    req.status(400).send({
      status: 400,
      message: "error",
    });
  }
};

export { register, login };
