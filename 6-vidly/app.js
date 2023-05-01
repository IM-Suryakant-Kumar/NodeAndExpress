const express = require("express");
const app = express();
app.use(express.json());
// TODO: http://vidly.com/api/genres

let genres = ["action", "adventure", "thriller", "comedy", "sci-fi"];

app.get("/api/genres", (req, res) => {
  res.status(200).send(genres);
});

app.post("/api/genres", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send("Name is required to identify the genre");
  const isGenreExist = genres.find((genre) => genre === name);
  if (isGenreExist) return res.send(`${name} genre already exist`);
  genres.push(name);
  res.status(200).send(name);
});

app.put("/api/genres/", (req, res) => {
  const { name, to } = req.body;
  if (!name) return res.status(400).send("Name is required to identify the genre");
  const isGenreExist = genres.find((genre) => genre === name);
  if (isGenreExist) {
    genres = genres.map((genre) => {
      if (genre === name) return to;
      return genre;
    });
    return res.send("name is updated to genres");
  }
  res.status(400).send("genre is not exist");
});

app.delete("/api/genres", (req, res) => {
  const { name } = req.body;
  if(!name) return res.status(400).send("name is required to identify the genre");
  const isGenreExist = genres.find(genre => genre === name);
  if(isGenreExist) {
    genres.splice(isGenreExist, 1);
    return res.send(`${name} is deleted from the genre`);
  }
  res.status(400).send("genre is not exist");
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server is listening on ${port}...`));
