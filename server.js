const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "tory lanz": {
    age: 30,
    birthName: "Daystar Shemuel Shua Peterson",
    birthLocation: "Brampton, Canada",
  },
  "jay-z": {
    age: 50,
    birthName: "Shawn Cater",
    birthLocation: "Brooklyn, New York",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: unknown,
  },
};
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLocaleLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}! Betta catch it`);
});
