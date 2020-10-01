const express = require("express");

const app = express();

const data = require("./data.json");

app.get("/listings", (request, response) => response.send(data.listings));

app.get("/agents", (request, response) => response.send(data.agents));

app.get("/agents/:agentlanguages", (request, response) => {
  const agent = data.agents.filter((agent) => {
    if (agent.languages.includes(request.params.agentlanguages)) {
      return true;
    } else {
      return false;
    }
  });
  response.send(agent);
});

const port = 4000;

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);
