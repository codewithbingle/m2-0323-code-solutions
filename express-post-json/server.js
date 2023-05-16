import express from 'express';

const app = express();
let nextId = 1;
const grades = {};

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.status(201);
  nextId++;
  res.json(grades[nextId]);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = req.params.id;
  if (grades[id]) {
    delete grades[id];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});
