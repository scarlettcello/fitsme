const request = require("request");

const clientID = process.env.REACT_APP_FATSECRET_CLIENT_ID;
const clientSecret = process.env.REACT_APP_FATSECRET_DATA_API_KEY;

const options = {
  method: "POST",
  url: "https://oauth.fatsecret.com/connect/token",
  auth: {
    user: clientID,
    password: clientSecret,
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  },
  form: {
    grant_type: "client_credentials",
    scope: "basic",
  },
  json: true,
  mode: "no-cors",
};

export default request(options, (error, response, body) => {
  if (error) throw new Error(error);
  console.log(response);
  localStorage.setItem("token", body.access_token);
});
