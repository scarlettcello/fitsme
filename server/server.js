const axios = require("axios");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const request = require("request");
const publicPath = path.join(__dirname, "..", "build");
dotenv.config();
const port = process.env.PORT || 8000;
const clientID = process.env.FATSECRET_CLIENT_ID;
const clientsecret = process.env.FATSECRET_CLIENT_PASSWORD;
const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.static(publicPath));
app.enable("trust proxy");
app.get("/auth", (req, res, next) => {
  //const token = req.cookies.token;
  //console.log("initial token", token);
  const options = {
    method: "POST",
    url: "https://oauth.fatsecret.com/connect/token",
    auth: {
      user: clientID,
      password: clientsecret,
    },
    headers: {
      "content-type": "application/json",
    },
    form: {
      grant_type: "client_credentials",
      scope: "basic",
    },
    json: true,
  };
  //if (token === undefined || !token) {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    // res.cookie("token", body.access_token, {
    //   maxAge: body.expires_in * 1000,
    //   httpOnly: true,
    // });
    res.json(body.access_token);
    console.log(body.access_token);
  });
  //}
});

app.get("/api", (req, res) => {
  //let token = req.cookies.token;
  //console.log("seach call", token);
  const term = req.query.search_expression;
  const token = req.query.token;
  console.log("query token: ", req.query);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get("https://platform.fatsecret.com/rest/server.api", {
      headers: headers,
      params: {
        search_expression: term,
        method: "foods.search",
        format: "json",
      },
    })
    .then((result) => res.send(result.data));
});

app.get("*", (req, res) => {
  //console.log(req.protocol, req.hostname, req.url);

  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up.");
});
