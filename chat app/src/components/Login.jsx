import React, { useState } from "react";
import { motion, spring } from "framer-motion";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const onUsernameChange = (e)=>{
    const val = e.target.value;
    setUsername(val)
  }
  const onPasswordChange = (e)=>{
    const val = e.target.value;
    setPassword(val)
  }
  function authenticate(e) {}

  return (
    <div className="auth-form-container">
      <motion.div
        key={isLogin ? "login" : "signup"}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
      >
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={onUsernameChange}/>
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
            <motion.button
              whileTap={{ x: 5, y: 5, boxShadow: "none" }}
              transition={{
                duration: 0.3,
                delay: 0,
                type: "spring",
                damping: 7,
              }}
              type="button"
              className="login-button"
            >
              Login
            </motion.button>
            <p>
              Don't have an account?{" "}
              <span onClick={toggleForm} className="toggle-link">
                Sign Up
              </span>
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
            <motion.button
              whileTap={{ x: 5, y: 5, boxShadow: "none" }}
              transition={{
                duration: 0.3,
                delay: 0,
                type: "spring",
                damping: 7,
              }}
              type="button"
              className="signup-button"
            >
              Sign Up
            </motion.button>
            <p>
              Already have an account?{" "}
              <span onClick={toggleForm} className="toggle-link">
                Login
              </span>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthForm;
