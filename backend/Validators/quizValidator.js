exports.quizValid = async (req, res) => {
  try {
    const { sessions } = req.body;
    if (!sessions) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Empty Questions Found. Fill Them Up.",
      };
    }
    return {
      success: true,
      statusCode: 200,
      sessions,
    };
  } catch (err) {
    res.status(400).json({ errMsg: err.message });
  }
};
