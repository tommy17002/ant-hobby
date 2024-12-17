const express = require("express");
const app = express();
const PORT = 3000;

// main route
app.get("/", (req, res) => {
  res.send("Hello, Ant Keepers Website On Progress!");
});

// run server
app.listen(PORT, () => {
  console.log("Server berjalan di http://localhost:${PORT}");
});

// shop route
app.get("/shop", (req, res) => {
  res.json([
    { id: 1, name: "Weaver Ant", price: "Rp40.000" },
    { id: 2, name: "Carpenter Ant", price: "Rp65.000" },
  ]);
});

// forum route
app.get("/forum", (req, res) => {
  res.json([
    { id: 1, topic: "How to keep Weaver Ant" },
    { id: 2, topic: "How to keep Carpenter Ant" },
  ]);
});
