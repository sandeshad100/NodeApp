import jwt from "jsonwebtoken";
export const sendCookie = (user, res, message, statusCode) => {
  //generate token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,

      //sameSite is none because Backend URL and Frontend URL could be different, if sameSite is none also set SECURE to TRUE
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: message,
    });
};
