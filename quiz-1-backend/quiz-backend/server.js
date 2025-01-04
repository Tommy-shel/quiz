const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const questions = [
  {
    id: 1,
    question: 'What is React?',
    options: ['A library', 'A framework', 'A language', 'None of the above'],
    answer: 'A library',
  },
  {
    id: 2,
    question: 'What is JSX?',
    options: ['JavaScript XML', 'Java Standard XML', 'JSON Style XML'],
    answer: 'JavaScript XML',
  },
  {
    id: 3,
    question: 'Who was the first person to step on the moon?',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Michael Collins', 'Yuri Gagarin'],
    answer: 'Neil Armstrong',
  },
  {
    id: 4,
    question: 'Which is the largest organ in the human body?',
    options: ['Brain', 'Heart', 'Skin', 'Liver'],
    answer: 'Skin',
  },
  {
    id: 5,
    question: 'What is the capital city of Australia?',
    options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
    answer: 'Canberra',
  },
  {
    id: 6,
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    answer: 'H2O',
  },
  {
    id: 7,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    answer: 'Mars',
  },
  {
    id: 8,
    question: 'What does HTTP stand for?',
    options: [
      'Hyper Transfer Text Protocol',
      'HyperText Transfer Protocol',
      'Hyper Transfer Terminal Protocol',
      'HyperText Transfer Program',
    ],
    answer: 'HyperText Transfer Protocol',
  },
];

app.get('/api/quizzes', (req, res) => {
  res.json(questions);
});

mongoose
  .connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});