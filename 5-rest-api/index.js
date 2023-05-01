const Joi = require("joi");
const express = require("express");
const func = require("joi/lib/types/func");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "courses 1" },
  { id: 2, name: "courses 2" },
  { id: 3, name: "courses 3" },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.get("/api/courses", (req, res) => {
  res.status(200).send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found."); // 404
  res.status(200).send(course);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body); // result.error
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course with the given ID was not found.");

  const { error } = validateCourse(req.body); // result.error
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.status(201).send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course with the given ID was not found.");

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
})

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(course, schema);
  return result;
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is litening on port ${port}...`));
