import express, { Application } from "express"
const app :Application= express();

app.get("/", (req, res) => {
  res.send("Technest E-commerce is running!");
});

export default app 
