import express from "express";
import bodyParser from "body-parser";
// import tvShows from "./models/tv.model";

const tvShows = require('./models/tv.model')

const app = express();
const PORT = 8000;
app.use(bodyParser.json());

// ! GET all Tv Shows
app.get("/tvShows", (req, res) => {
  res.json(tvShows);
});

// ? GET Tv Shows by YEAR
app.get("/tvShows/:year", (req, res) => {
  const year = parseInt(req.params.year, 10);
  const filteredShows = tvShows.filter((show) => show.yearCreated === year);
  res.json(filteredShows);
});

// DELETE Tv shows by TITLE
app.delete("/tvShows/:title", (req, res) => {
  const title = req.params.title;
  const index = tvShows.findIndex((show) => show.tvShow === title);
  if (index !== -1) {
    tvShows.splice(index, 1);
    res.json(tvShows);
  } else {
    res.status(404).json({ message: "TV show not found" });
  }
});

// ! PATCH TV show by TITLE
app.patch("/tvShows/:title", (req, res) => {
  const title = req.params.title;
  const index = tvShows.findIndex((show) => show.tvShow === title);
  if (index !== -1) {
    tvShows[index].starring = req.body.starring;
    res.json(tvShows);
  } else {
    res.status(404).json({ message: "TV show not found" });
  }
});

// ? POST new TV show
app.post("/tvShows", (req, res) => {
  const newShow = req.body;
  tvShows.push(newShow);
  res.json(tvShows);
});

app.listen(PORT, () => {
  console.log(`the server is running on port : ${PORT}`);
});
