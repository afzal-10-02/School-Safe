import { Link } from 'react-router-dom';
import heroIllustration from '../assets/images/hero-illustration.svg';
import character from '../assets/images/character.svg';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};



const StartScreen = () => {
    return (
        <div className="start-screen active pt-2">
      {/* Hero Section */}
      <motion.div
        className="hero-section text-center text-lg-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6} className="text-center text-lg-start my-4">
              <motion.div variants={itemVariants}>
                <h1 className="display-4 fw-bold">DISASTER READY PUNJAB</h1>
                <p className="lead subtitle">Prepare, Learn, Survive</p>
                <p className="description fs-5">
                  Your interactive guide to staying safe during floods, earthquakes, and other emergencies.
                </p>
              </motion.div>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/quiz">
                    <Button variant="primary" className="btn primary-btn" id="start-learning-btn">
                      <i className="fas fa-play-circle me-2"></i> START LEARNING
                    </Button>
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline-secondary" className="btn secondary-btn">
                    EXPLORE TOPICS
                  </Button>
                </motion.div>
              </div>
            </Col>
            <Col lg={6} className="text-center my-4">
              <motion.div variants={itemVariants}>
                <Image src={heroIllustration} fluid alt="Children learning about disaster preparedness" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <hr className="my-5" />

      {/* Quiz Introduction */}
      <motion.div
        id="quiz-app-container"
        className="my-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <div className="quiz-header text-center mb-5">
            <div className="character-container mb-3 " style={{ maxWidth: '400px', margin: '0 auto' }}>
              <motion.div
                className="character"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Image src={character} alt="Safety Hero" className="hero-image" />
              </motion.div>
            </div>
            <h1 className="fw-bold"><i className="fas fa-shield-alt me-2"></i> Disaster Ready Punjab <i className="fas fa-shield-alt ms-2"></i></h1>
            <p className="subtitle fs-4">Fun Quiz for Super Safety Heroes!</p>
            <div className="stars-container fs-3 text-warning">
              <motion.i className="fas fa-star mx-1" whileHover={{ scale: 1.2 }} />
              <motion.i className="fas fa-star mx-1" whileHover={{ scale: 1.2 }} />
              <motion.i className="fas fa-star mx-1" whileHover={{ scale: 1.2 }} />
              <motion.i className="fas fa-star mx-1" whileHover={{ scale: 1.2 }} />
              <motion.i className="fas fa-star mx-1" whileHover={{ scale: 1.2 }} />
            </div>
          </div>
          <motion.div
            className="quiz-box p-4 p-md-5 text-center shadow rounded"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="badge-container mb-3">
              <motion.div
                className="badge p-3 bg-warning text-dark rounded-circle d-inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <i className="fas fa-medal fs-1"></i>
              </motion.div>
            </div>
            <h2 className="mb-3">Welcome Young Safety Heroes!</h2>
            <div className="intro-text fs-5">
              <p>Are you ready for an exciting adventure to become a <span className="highlight">Disaster Ready Hero</span>? Test your knowledge and learn how to keep yourself, your friends, and family safe during emergencies!</p>
              <ul className="list-unstyled text-start d-inline-block mt-4">
                <li className="feature my-2"><i className="fas fa-check-circle me-2 text-success"></i> Answer fun questions</li>
                <li className="feature my-2"><i className="fas fa-check-circle me-2 text-success"></i> Learn safety tips</li>
                <li className="feature my-2"><i className="fas fa-check-circle me-2 text-success"></i> Earn your safety badge</li>
              </ul>
            </div>
            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/quiz" id="start-btn">
                <Button variant="success" className="btn w-100">
                  <i className="fas fa-play-circle me-2"></i> Start Your Adventure!
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </div>
    );
};

export default StartScreen;