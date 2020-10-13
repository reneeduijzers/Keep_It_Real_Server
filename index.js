const express = require("express");
const app = express();
const jsonParser = express.json();
const corsMiddleWare = require("cors");
const data = require("./data.json");
const port = process.env.PORT || 4000;

app.use(jsonParser);
app.use(corsMiddleWare());

app.get("/listings", async (request, response) => {
  const listings = data.listings;
  try {
    response.send(listings);
  } catch (e) {
    next(e);
  }
});

app.get("/aboutus", async (request, response) => {
  const agents = data.agents;
  try {
    response.send(agents);
  } catch (e) {
    next(e);
  }
});

app.get("/aboutus/:agentlanguages", async (request, response) => {
  const agent = data.agents.filter((agent) => {
    if (agent.languages.includes(request.params.agentlanguages)) {
      return true;
    } else {
      return false;
    }
  });
  try {
    response.send(agents);
  } catch (e) {
    next(e);
  }
});

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);
