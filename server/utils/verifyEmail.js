import { User } from "../models/User.js";
import { Merchent } from "../models/Merchent.js";

const verifyEmail = async (email, type) => {
  try {
    if (type === "user") {
      const userData = await User.findOne({ email });
      if (userData && userData.email === email) {
        return "E";
      }
    }else{
        const userData = await Merchent.findOne({ email });
        if (userData && userData.email === email) {
            return "E";
          }
    }

    return null;
  } catch (err) {
    return "Err";
  }
};

export { verifyEmail };
