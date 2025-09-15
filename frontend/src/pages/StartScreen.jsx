import { Link } from 'react-router-dom';
import heroIllustration from '../assets/images/hero-illustration.svg';
import character from '../assets/images/character.svg';
import '../styles/StartScreen.css';

const StartScreen = () => {
    return (
        <div className="start-screen active">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>DISASTER READY PUNJAB</h1>
                    <p className="subtitle">Prepare, Learn, Survive</p>
                    <p className="description">Your interactive guide to staying safe during floods, earthquakes, and other emergencies.</p>
                    <div className="hero-buttons">
                        <Link to="/quiz" className="btn primary-btn" id="start-learning-btn">
                            <i className="fas fa-play-circle"></i> START LEARNING
                        </Link>
                        <button className="btn secondary-btn">EXPLORE TOPICS</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroIllustration} alt="Children learning about disaster preparedness" />
                </div>
            </div>

            <div id="quiz-app-container">
                <div className="container">
                    <div className="quiz-header">
                        <div className="character-container">
                            <div className="character">
                                <img src={character} alt="Safety Hero" className="hero-image" />
                            </div>
                        </div>
                        <div className="title-container">
                            <h1><i className="fas fa-shield-alt"></i> Disaster Ready Punjab <i className="fas fa-shield-alt"></i></h1>
                            <p className="subtitle">Fun Quiz for Super Safety Heroes!</p>
                            <div className="stars-container">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div className="quiz-box">
                        <div className="badge-container">
                            <div className="badge">
                                <i className="fas fa-medal"></i>
                            </div>
                        </div>
                        <h2>Welcome Young Safety Heroes!</h2>
                        <div className="intro-text">
                            <p>Are you ready for an exciting adventure to become a <span className="highlight">Disaster Ready Hero</span>? Test your knowledge and learn how to keep yourself, your friends, and family safe during emergencies!</p>
                            <div className="features-list">
                                <div className="feature"><i className="fas fa-check-circle"></i> Answer fun questions</div>
                                <div className="feature"><i className="fas fa-check-circle"></i> Learn safety tips</div>
                                <div className="feature"><i className="fas fa-check-circle"></i> Earn your safety badge</div>
                            </div>
                        </div>
                        <Link to="/quiz" id="start-btn" className="btn">
                            <i className="fas fa-play-circle"></i> Start Your Adventure!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;