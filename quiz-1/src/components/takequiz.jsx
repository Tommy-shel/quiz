import { useEffect, useState } from 'react';
import axios from 'axios';

const TakeQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quizzes');
        console.log('Quizzes fetched:', response.data);
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
        setError(error.message);
      }
    };

    fetchQuizzes();
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleSubmit = () => {
    const correctAnswers = quizzes.reduce((acc, quiz) => ({ ...acc, [quiz.id]: quiz.answer }), {});
    const score = Object.keys(userAnswers).reduce((acc, questionId) => {
      if (userAnswers[questionId] === correctAnswers[questionId]) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setUserScore(score);
    setShowScore(true);
  };

  return (
    <div className="take-quiz-container p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Available Quizzes</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        quizzes.length > 0 ? (
          <ul className="space-y-4">
            {quizzes.map((quiz) => (
              <li key={quiz.id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-800">{quiz.question}</h2>
                <ul className="mt-2">
                  {quiz.options.map((option, index) => (
                    <li key={index} className="text-gray-600">
                      <input
                        type="radio"
                        name={quiz.id}
                        value={option}
                        checked={userAnswers[quiz.id] === option}
                        onChange={() => handleAnswerChange(quiz.id, option)}
                      />
                      <span className="ml-2">{option}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No quizzes available.</p>
        )
      )}
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={handleSubmit}
      >
        Submit Answers
      </button>
      {showScore && (
        <p className="text-2xl font-bold text-gray-800 mt-4">
          Your score is: {userScore} / {quizzes.length}
        </p>
      )}
    </div>
  );
};

export default TakeQuiz;