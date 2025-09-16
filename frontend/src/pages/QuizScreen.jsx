import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ProgressBar, Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

// Import your sound files
import correctSound from '../assets/sounds/correct.wav';
import incorrectSound from '../assets/sounds/incorrect.wav';
import clickSound from '../assets/sounds/click.mp3';
import hoverSound from '../assets/sounds/hover.mp3';

// Reusable Framer Motion variants for animations
const questionCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
};

const optionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

const QuizScreen = ({ question, questionIndex, totalQuestions, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Reset state when question changes
    setSelectedOption(null);
    setShowExplanation(false);
    setIsCorrect(false);
  }, [questionIndex]);

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      new Audio(clickSound).play();
      setSelectedOption(index);
      setIsCorrect(index === question.correctAnswer);
    }
  };

  const handleNextQuestion = () => {
    onAnswer(isCorrect);
  };

  const progressPercentage = ((questionIndex) / totalQuestions) * 100;

  return (
    <Container className="my-5">
      <div className="progress-container mb-4">
        <Row className="align-items-center g-3">
          <Col xs={12} md={4} className="text-center text-md-start">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <i className="fas fa-running me-2"></i>Your Progress:
            </motion.div>
          </Col>
          <Col xs={12} md={5}>
            <ProgressBar now={progressPercentage} variant="success" className="shadow-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` ,backgroundColor: '#008000' }}
                transition={{ duration: 0.5 }}
                className="progress-bar-inner"
              />
            </ProgressBar>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-end">
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <i className="fas fa-question-circle me-2"></i>Question {questionIndex + 1}/{totalQuestions}
            </motion.div>
          </Col>
        </Row>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={questionIndex}
          variants={questionCardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Card className="question-card text-center p-2 p-md-4 mb-2 shadow-lg rounded-3">
            <motion.div
              className="question-header mb-3"
              animate={{ rotateY: 360 }}
              transition={{ duration: 1 }}
            >
              <i className="fas fa-lightbulb question-icon text-warning fs-1"></i>
            </motion.div>
            <h2 id="question-text" className="mb-4">{question.question}</h2>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className={`options-container d-grid gap-2 ${selectedOption !== null ? 'disabled' : ''}`}>
        {question.options.map((option, index) => (
          <motion.div
            key={index}
            variants={optionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 * index }}
            className={`option p-2 rounded-pill text-center ${selectedOption === index ? (isCorrect ? 'bg-success text-white' : 'bg-danger text-white') : ''}`}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => new Audio(hoverSound).play()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{option}</span>
          </motion.div>
        ))}
      </div>

      {selectedOption !== null && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="secondary"
              onClick={() => {
                new Audio(isCorrect ? correctSound : incorrectSound).play();
                setShowExplanation(true);
              }}
            >
              <i className="fas fa-lightbulb me-2"></i> Show Explanation
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="primary"
              onClick={handleNextQuestion}
            >
              <i className="fas fa-arrow-circle-right me-2"></i> Next Question
            </Button>
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {showExplanation && (
          <motion.div
            className="explanation-toast-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="explanation-toast-content p-4 rounded-3 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="d-flex justify-content-end mb-2">
                <Button variant="link" className="p-0 text-white-50" onClick={() => setShowExplanation(false)}>
                  <i className="fas fa-times"></i>
                </Button>
              </div>
              <i className="fas fa-info-circle mb-3 fs-2 text-info"></i>
              <p className="fs-5 text-white">{question.explanation}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default QuizScreen;