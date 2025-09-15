import { Link } from 'react-router-dom';

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
        <div id="results-screen" className="screen active">
            <div className="confetti"></div>
            <h2 className="results-title"><i className="fas fa-trophy"></i> Your Adventure Results <i className="fas fa-trophy"></i></h2>
            <div id="score-container">
                <div className="score-circle">
                    <span id="score">{score}</span>
                    <span className="score-label">out of <span id="total-questions">{totalQuestions}</span></span>
                </div>
            </div>
            <div className="badge-earned">
                <div className="badge-icon">
                    <i className="fas fa-award"></i>
                </div>
                <div className="badge-text">Safety Hero Badge Earned!</div>
            </div>
            <div id="feedback" className="feedback-animate">{feedbackText}</div>
            <div className="resources">
                <h3><i className="fas fa-book"></i> Learn More Safety Tips</h3>
                <ul id="resources-list">
                    <li><a href="https://ndma.gov.in/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> National Disaster Management Authority</a></li>
                    <li><a href="https://punjab.gov.in/disaster-management/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Punjab Disaster Management Authority</a></li>
                </ul>
            </div>
            <Link to="/" id="restart-btn" className="btn" onClick={onRestart}>
                <i className="fas fa-redo-alt"></i> Play Again!
            </Link>
        </div>
    );
};

export default ResultsScreen;