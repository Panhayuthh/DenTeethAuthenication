import React from 'react';

// const GoogleButton = () => {
//   const handleGoogleLogin = () => {
//     window.location.href = 'https://mail.google.com/mail/u/0/';
//   };

//   return (
//     <button className='google' onClick={handleGoogleLogin}>
//       G
//     </button>
//   );
// };

// const FacebookButton = () => {
//   const handleFacebookLogin = () => {
//     window.location.href = 'https://www.facebook.com/';
//   };

//   return (
//     <button className='facebook' onClick={handleFacebookLogin}>
//       f
//     </button>
//   );
// };

const Login = ({ errorMessage, handleInputChange, handleSignUp, handleLoginFormSwitch, handleLogin, showLoginForm }) => {
  return (
    <div className="container">
      <div className="description">
        <h1>Welcome to</h1>
        <img className="teethlogo" src={teetlogo} alt="teeth logo" />
        <h2 className="logoname">Denteeth</h2>
        <p className="description">
          It's a website that can help users by recommending a solution or
          helping users make an appointment with a doctor nearby.
        </p>
      </div>
      <div className="create-account">
        <h2>{showLoginForm ? 'Login to Your Account' : 'Create Your Account'}</h2>
        <form onSubmit={showLoginForm ? handleLogin : handleSignUp}>
          {showLoginForm ? null : (
            <div className="input-box">
              <input type="text" name="username" placeholder="Username" onChange={handleInputChange} required />
            </div>
          )}
          <div className="input-box">
            <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          </div>
          {!showLoginForm && (
            <div className="input-box">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} required />
            </div>
          )}
          <button type="submit">{showLoginForm ? 'Login' : 'Sign Up'}</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <h5 className='message'>
            {showLoginForm ? 'Don\'t have an account? ' : 'Already have an account? '}
            <button type="button" onClick={handleLoginFormSwitch}>
              {showLoginForm ? 'Sign up' : 'Login'}
            </button>
          </h5>
          {/* <GoogleButton />
          <FacebookButton /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
