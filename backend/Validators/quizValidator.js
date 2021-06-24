exports.quizValid = async (req, res) => {
  try {
    const { sessionNo, sessionTitle } = req.body;
    if (!sessionNo || !sessionTitle) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Empty Questions Found. Fill Them Up.",
      };
    }

    return {
      success: true,
      statusCode: 200,
    };
  } catch (err) {
    res.status(400).json({ errMsg: err.message });
  }
};
