const express = require('express');

// Setting up Express App
// ============================================
const app = express();
const PORT = process.env.PORT || 4030;

// Allow Express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.text());

app.use(express.static("app/public"));

// Complete routing here ***
// require("./app/")(app);
// require("./app/")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});