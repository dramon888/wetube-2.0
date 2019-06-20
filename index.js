// const express = require("express");
const app = express();
import express from "express";

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http//localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
