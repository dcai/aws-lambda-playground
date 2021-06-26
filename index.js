const _ = require("lodash");

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: {
      msg: "Hello from Lambda and Github!",
      title: _.toUpper("api"),
      event,
    },
  };
  return response;
};
