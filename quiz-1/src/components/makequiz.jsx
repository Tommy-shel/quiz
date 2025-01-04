import { useState } from 'react';
import axios from 'axios';

const MakeQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: '',
    description: '',
    questions: [],
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: '',
  });

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const addQuestion = () => {
    if (
      currentQuestion.question &&
      currentQuestion.options.every((opt) => opt) &&
      currentQuestion.answer
    ) {
      setQuiz({
        ...quiz,
        questions: [...quiz.questions, currentQuestion],
      });
      setCurrentQuestion({
        question: '',
        options: ['', '', '', ''],
        answer: '',
      });
      axios.post('http://localhost:5000/api/quizzes', quiz)
        .then((response) => {
          console.log('Quiz created:', response.data);
        })
        .catch((error) => {
          console.error('Error creating quiz:', error);
          alert('Failed to save quiz');
        });
    } else {
      alert('Please fill in all fields for the question.');
    }
  };

  return (
    <div className="make-quiz-container bg-gray-50 p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Create a New Quiz</h1>

      <div className="quiz-details mb-8">
        <input
          type="text"
          name="title"
          placeholder="Quiz Title"
          value={quiz.title}
          onChange={handleQuizChange}
          className="block w-full p-3 border rounded-md mb-4"
        />
        <textarea
          name="description"
          placeholder="Quiz Description"
          value={quiz.description}
          onChange={handleQuizChange}
          className="block w-full p-3 border rounded-md mb-4"
        />
      </div>

      <div className="question-form mb-8">
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={currentQuestion.question}
          onChange={handleQuestionChange}
          className="block w-full p-3 border rounded-md mb-4"
        />
        {currentQuestion.options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            className="block w-full p-3 border rounded-md mb-2"
          />
        ))}
        <input
          type="text"
          name="answer"
          placeholder="Correct Answer"
          value={currentQuestion.answer}
          onChange={handleQuestionChange}
          className="block w-full p-3 border rounded-md mb-4"
        />
        <button
          onClick={addQuestion}
          className="bg-gray-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-md"
        >
          Add Question
        </button>
      </div>

      <div className="quiz-preview mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quiz Preview</h2>
        {quiz.questions.length > 0 ? (
          <ul className="space-y-4">
            {quiz.questions.map((q, index) => (
              <li key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-medium text-gray-800">{q.question}</h3>
                <ul className="mt-2">
                  {q.options.map((option, i) => (
                    <li key={i} className="text-gray-600">
                      {option}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mt-2">Correct Answer: {q.answer}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions added yet.</p>
        )}
      </div>

      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
        onClick={() => {
  alert('Quiz created successfully');
        }}
      >
        Go to Take Quiz
      </button>
    </div>
  );
};

export default MakeQuiz;