import { useState } from "react";
import "./App.css";
import teetlogo from "./assets/teet.png";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailForReset, setEmailForReset] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetMessage, setResetMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "emailForReset":
        setEmailForReset(value);
        break;
      default:
        break;
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const registerRequest = { username, email, password };

    // Check if the password contains special characters
    const specialChars = /[!@#$%^&*()_+\-={};':"\\|,.<>?]+/;
    if (!specialChars.test(password)) {
      setErrorMessage("Password must contain at least one special character.");
      return; // Stop further execution
    }

    console.log(registerRequest);
    // Add logic to send the form data to the server for account creation
    fetch("http://localhost:8080/api/v1/registration", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(registerRequest),
    }).then(() => {
      console.log("User added");
      setErrorMessage(""); // Clear error message on successful registration
    });
  };

  const handleLoginFormSwitch = () => {
    setShowLoginForm(!showLoginForm);
    setErrorMessage(""); // Clear error message when switching forms
    setShowResetForm(false); // Ensure reset form is hidden
  };

  const handlePasswordReset = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v1/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailForReset }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetMessage("Password reset link has been sent to your email.");
        } else {
          setResetMessage(
            "Failed to send password reset link. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Error during password reset request:", error);
        setResetMessage("An error occurred. Please try again.");
      });
  };

  const handleResetFormSwitch = () => {
    setShowResetForm(!showResetForm);
    setErrorMessage("");
    setResetMessage("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Proceed with login request
    const loginRequest = { email, password }; // Assuming email and password are obtained from input fields or elsewhere
    console.log(loginRequest);
    fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginRequest),
    })
      .then((response) => {
        // Handle response, e.g., check status and process data
        // For example:
        if (response.ok) {
          // If response status is in the range 200-299
          console.log("Login request succeeded");
        } else {
          // If response status is outside the range 200-299
          console.error("Login request failed");
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error occurred during login request:", error);
      });
  };

  return (
    <div className="container">
      <div className="description">
        <h1 className="welcome">Welcome to</h1>
        <img className="teethlogo" src={teetlogo} alt="teeth logo" />
        <h2 className="logoname">Denteeth</h2>
        <p className="description">
          It is a website that can help users by recommending a solution or
          helping users make an appointment with a doctor nearby.
        </p>
      </div>
      <div className="create-account">
        <h2 className="createaccount">
          {showResetForm
            ? "Reset Your Password"
            : showLoginForm
            ? "Login to Your Account"
            : "Create Your Account"}
        </h2>
        {showResetForm ? (
          <form onSubmit={handlePasswordReset}>
            <div className="input-box">
              <input
                type="email"
                name="emailForReset"
                placeholder="Email Address"
                value={emailForReset}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Reset Password</button>
            {resetMessage && <p className="error-message">{resetMessage}</p>}
            <h5 className="message">
              <button type="button" onClick={handleResetFormSwitch}>
                Back to Login
              </button>
            </h5>
          </form>
        ) : (
          <form onSubmit={showLoginForm ? handleLogin : handleSignUp}>
            {!showLoginForm && (
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </div>
            {!showLoginForm && (
              <div className="input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            <button type="submit">{showLoginForm ? "Login" : "Sign Up"}</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <h5 className="message">
              {showLoginForm
                ? "Don't have an account? "
                : "Already have an account? "}
              <button type="button" onClick={handleLoginFormSwitch}>
                {showLoginForm ? "Sign up" : "Login"}
              </button>
            </h5>
            {showLoginForm && (
              <button className= "forget-password" type="button" onClick={handleResetFormSwitch}>
                Forget password?
              </button>
            )}

          </form>
        )}
      </div>
    </div>
  );
}

export default App;
