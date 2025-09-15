import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import QuizScreen from './pages/QuizScreen';
import ResultsScreen from './pages/ResultsScreen';
import { questions } from './questionsData';
import { useState } from 'react';
import logo from './assets/images/logo.svg';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
            />
            <span>DISASTER<br/>PUNJAB</span>
          </div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/quiz">Quizzes</a></li>
              <li><a href="#">Topics</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </nav>
          <button className="login-btn">Login</button>
        </div>

        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <QuizScreen
                  question={questions[currentQuestionIndex]}
                  questionIndex={currentQuestionIndex}
                  totalQuestions={questions.length}
                  onAnswer={handleAnswer}
                />
              ) : (
                <ResultsScreen score={score} totalQuestions={questions.length} onRestart={restartQuiz} />
              )
            }
          />
        </Routes>
        <footer>
          <p>© 2023 Disaster Ready Punjab - Fun Safety Quiz for Kids</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;