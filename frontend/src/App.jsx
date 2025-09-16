import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import QuizScreen from './pages/QuizScreen';
import ResultsScreen from './pages/ResultsScreen';
import { questions } from './questionsData';
import { useState } from 'react';
import logo from './assets/images/logo.svg';
import AuthPage from './pages/AuthScreen';
import { motion } from 'framer-motion';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

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

      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" as={motion.a} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top me-2"
              alt="logo"
            />
            <span className="fw-bold" style={{ color: 'var(--primary-color)', fontSize: '1.8rem', lineHeight: '1' }}>
              DISASTER<br />PUNJAB
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4">
              <Nav.Link as={motion.a} whileHover={{ scale: 1.1 }} href="/" className="mx-2">Home</Nav.Link>
              <Nav.Link as={motion.a} whileHover={{ scale: 1.1 }} href="/quiz" className="mx-2">Quizzes</Nav.Link>
              <Nav.Link as={motion.a} whileHover={{ scale: 1.1 }} href="#" className="mx-2">Topics</Nav.Link>
              <Nav.Link as={motion.a} whileHover={{ scale: 1.1 }} href="#" className="mx-2">Resources</Nav.Link>
            </Nav>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="/Auth" variant="secondary" className="rounded-pill px-4 py-2 fw-bold shadow-sm">
                Login
              </Button>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: '80px' }}></div> {/* Spacer for fixed navbar */}

      <motion.div className='main-content'>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/Auth" element={<AuthPage />} />
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
      </motion.div>
      <footer className="text-center mt-3">
    © 2023 Disaster Ready Punjab - Fun Safety Quiz for Kids
</footer>
    </Router>
  );
}

export default App;