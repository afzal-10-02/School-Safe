import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring' } },
};

const badgeVariants = {
    initial: { rotate: 0 },
    animate: { rotate: [0, -15, 15, 0], transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 } },
};

const ResultsScreen = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / totalQuestions) * 100;
    let feedbackText = '';

    if (percentage >= 80) {
        feedbackText = '🌟 AMAZING JOB, SUPER HERO! 🌟 You are a true Safety Champion! You know exactly what to do in an emergency!';
    } else if (percentage >= 60) {
        feedbackText = '😃 GREAT WORK, SAFETY STAR! 😃 You know a lot about staying safe during emergencies! Just a few more things to learn!';
    } else if (percentage >= 40) {
        feedbackText = '😊 GOOD TRY, BRAVE EXPLORER! 😊 You\'re on your way to becoming a Safety Hero! Keep learning and you\'ll be a master in no time!';
    } else {
        feedbackText = '🌈 YOU\'RE JUST STARTING YOUR SAFETY JOURNEY! 🌈 That\'s okay! Everyone starts somewhere. Check out the safety tips below to become a true Safety Hero!';
    }

    return (
        <Container className="my-5" >
            <motion.div
                className="confetti-animation-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* You would place your confetti animation component here if you had one */}
            </motion.div>

            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="results-container text-center p-4 p-md-5 mx-auto rounded-3 shadow-lg"
            >
                <motion.h2
                    className="results-title display-4 fw-bold mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                >
                    <i className="fas fa-trophy text-warning me-2"></i> Your Adventure Results <i className="fas fa-trophy text-warning ms-2"></i>
                </motion.h2>

                <div className="score-badge-container d-flex flex-column align-items-center mb-4">
                    <motion.div
                        className="score-circle bg-primary text-white d-flex flex-column justify-content-center align-items-center rounded-pill border border-5 border-light p-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 200 }}
                    >
                        <span className="score-value display-1 fw-bold">{score}</span>
                        <span className="score-label fs-5">out of {totalQuestions}</span>
                    </motion.div>

                    <motion.div
                        className="badge-earned mt-4"
                        variants={badgeVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <Card className="p-3 shadow">
                            <i className="fas fa-award text-success fs-2 mb-2"></i>
                            <div className="badge-text fw-bold">Safety Hero Badge Earned!</div>
                        </Card>
                    </motion.div>
                </div>

                <motion.p
                    id="feedback"
                    className="feedback-text fs-4 fw-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    {feedbackText}
                </motion.p>

                <div className="resources mb-4 text-center">
                    <h3 className="fs-5 mb-3"><i className="fas fa-book me-2"></i> Learn More Safety Tips</h3>
                    <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center gap-3">
                        <li className="d-flex align-items-center">
                            <a href="https://ndma.gov.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                <i className="fas fa-external-link-alt me-2"></i> National Disaster Management Authority
                            </a>
                        </li>
                        <li className="d-flex align-items-center">
                            <a href="https://punjab.gov.in/disaster-management/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                <i className="fas fa-external-link-alt me-2"></i> Punjab Disaster Management Authority
                            </a>
                        </li>
                    </ul>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                >
                    <Link to="/" id="restart-btn" className="d-inline-block text-decoration-none" onClick={onRestart}>
                        <Button variant="success" className="btn-lg px-4 py-2 rounded-pill shadow-sm">
                            <i className="fas fa-redo-alt me-2"></i> Play Again!
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default ResultsScreen;