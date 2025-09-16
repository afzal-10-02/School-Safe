import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const formVariants = {
        initial: { opacity: 0, scale: 0.8, rotateY: 90, x: isLogin ? 100 : -100 },
        animate: { opacity: 1, scale: 1, rotateY: 0, x: 0 },
        exit: { opacity: 0, scale: 0.8, rotateY: -90, x: isLogin ? -100 : 100, position: 'absolute' }
    };

    const inputVariants = {
        hover: { scale: 1.02, boxShadow: "0px 0px 10px rgba(255, 193, 7, 0.4)" },
        focus: { scale: 1.05, boxShadow: "0px 0px 12px rgba(255, 193, 7, 0.6)" }
    };

    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
        tap: { scale: 0.95 }
    };

    return (
        <div className="auth-container d-flex justify-content-center align-items-center vh-100">
            <motion.div 
                className="card p-5 shadow-lg rounded-5 auth-card"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <AnimatePresence mode="wait">
                    {isLogin ? (
                        <motion.div
                            key="login"
                            variants={formVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="card-title text-center text-primary mb-4 fw-bold">Welcome Back!</h2>
                            <p className="text-center text-secondary mb-4">Please log in to continue your adventure.</p>
                            <form>
                                <motion.div className="form-floating mb-3" variants={inputVariants} whileHover="hover">
                                    <input type="email" className="form-control" id="loginEmail" placeholder="name@example.com" />
                                    <label htmlFor="loginEmail">Email address</label>
                                </motion.div>
                                <motion.div className="form-floating mb-3" variants={inputVariants} whileHover="hover">
                                    <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                                    <label htmlFor="loginPassword">Password</label>
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-100 mt-3 fw-bold"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Log In
                                </motion.button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup"
                            variants={formVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="card-title text-center text-success mb-4 fw-bold">Join Us Today!</h2>
                            <p className="text-center text-secondary mb-4">Sign up to become a Disaster Ready Hero.</p>
                            <form>
                                <motion.div className="form-floating mb-3" variants={inputVariants} whileHover="hover">
                                    <input type="text" className="form-control" id="signupName" placeholder="Full Name" />
                                    <label htmlFor="signupName">Full Name</label>
                                </motion.div>
                                <motion.div className="form-floating mb-3" variants={inputVariants} whileHover="hover">
                                    <input type="email" className="form-control" id="signupEmail" placeholder="name@example.com" />
                                    <label htmlFor="signupEmail">Email address</label>
                                </motion.div>
                                <motion.div className="form-floating mb-3" variants={inputVariants} whileHover="hover">
                                    <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                                    <label htmlFor="signupPassword">Password</label>
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className="btn btn-success w-100 mt-3 fw-bold"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Sign Up
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="text-center mt-3">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button className="btn btn-link p-0 text-decoration-none" onClick={() => setIsLogin(!isLogin)}>
                            <motion.span whileHover={{ color: '#FFC107' }}>
                                {isLogin ? "Sign Up" : "Log In"}
                            </motion.span>
                        </button>
                    </p>
                    <Link to="/" className="btn btn-link text-decoration-none p-0">
                        <motion.span whileHover={{ color: '#FFC107' }}>
                            <i className="fas fa-arrow-left me-2"></i>Back to Home
                        </motion.span>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthPage;
