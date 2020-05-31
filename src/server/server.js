const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = "5000";
const twit = require("twit");
const config = require("./config");

const Twit = new twit(config);

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/tweets/", (request, response) => {
  const { searchTerm } = request.query;

  const params = {
    q: searchTerm,
  };
  Twit.get("search/tweets", params, (error, data, res) => {
    response.json({ data });
  });
});
app.listen(PORT, () => console.log(`app is listening on port: ${PORT} `));
