import { useState, useEffect } from 'react';
import correctSound from '../assets/sounds/correct.wav';
import incorrectSound from '../assets/sounds/incorrect.wav';
import clickSound from '../assets/sounds/click.mp3';
import hoverSound from '../assets/sounds/hover.mp3';

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
        if (!showExplanation) {
            new Audio(clickSound).play();
            setSelectedOption(index);
            setIsCorrect(index === question.correctAnswer);
        }
    };

    const handleShowExplanation = () => {
        if (selectedOption !== null) {
            new Audio(isCorrect ? correctSound : incorrectSound).play();
            setShowExplanation(true);
        }
    };

    const handleNextQuestion = () => {
        onAnswer(isCorrect);
    };

    const progressPercentage = ((questionIndex) / totalQuestions) * 100;

    return (
        <div id="question-screen" className="screen active">
            <div className="progress-container">
                <div className="progress-label"><i className="fas fa-running"></i> Your Progress:</div>
                <div className="progress-bar">
                    <div id="progress" className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div id="question-counter"><i className="fas fa-question-circle"></i> Question {questionIndex + 1}/{totalQuestions}</div>
            </div>
            <div className="question-card">
                <div className="question-header">
                    <i className="fas fa-lightbulb question-icon"></i>
                </div>
                <h2 id="question-text">{question.question}</h2>
            </div>
            <div id="options-container" className={`options-container ${showExplanation ? 'disabled' : ''}`}>
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        className={`option ${selectedOption === index ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => handleOptionClick(index)}
                        onMouseEnter={() => new Audio(hoverSound).play()}
                    >
                        <i className="fas fa-check-circle option-icon"></i>
                        <span>{option}</span>
                    </div>
                ))}
            </div>
            {showExplanation && (
                <div className="explanation fade-in">
                    <i className="fas fa-info-circle explanation-icon"></i>
                    <span>{question.explanation}</span>
                </div>
            )}
            <button
                id="next-btn"
                className={`btn ${selectedOption !== null ? 'pulse-btn' : ''}`}
                disabled={selectedOption === null}
                onClick={showExplanation ? handleNextQuestion : handleShowExplanation}
            >
                {showExplanation ? (
                    <><i className="fas fa-arrow-circle-right"></i> Next Question</>
                ) : (
                    <><i className="fas fa-lightbulb"></i> Show Explanation</>
                )}
            </button>
        </div>
    );
};

export default QuizScreen;