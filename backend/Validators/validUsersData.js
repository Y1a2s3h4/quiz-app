const users = require("../Model/users");

exports.validUserData = async (req, res) => {
  try {
    const { email, username, password, cpassword } = req.body;
    if (!email || !username || !password || !cpassword) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Empty Fields Found. Fill Them Up.",
      };
    }

    if (password.length < 8) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Password Length Should Be Minimum 8 or More Than 8.",
      };
    }

    if (password != cpassword) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Both Passwords Didn't Matched Check Both Passwords Field.",
      };
    }

    const userMail = await users.findOne({ email });
    if (!!userMail) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "This Mail Already Exist / Registered.",
      };
    }

    const userName = await users.findOne({ username });
    if (!!userName) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "This Username Already Exist / Registered.",
      };
    }

    return {
      success: true,
      statusCode: 200,
      errorMsg: "Everything Went Well!",
    };
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
