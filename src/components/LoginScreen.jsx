import { Link } from 'react-router-dom';

const LoginScreen = () => {
    return(
    <div className="register-container">
      <h2>Register for Tinder</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            min="1"
            placeholder="25"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+12025550123"
          />
        </div>
        <Link to="/feed">
            <button type="submit" className="register-submit-btn">
            Create Account
            </button>
        </Link>
      </form>
      <div className="id-verification-section">
        <h3>ID Verification</h3>
        <div className="id-verification-card">
          <div className="id-upload-placeholder">
            <span role="img" aria-label="id-card" style={{fontSize: '2rem'}}>🪪</span>
            <p>Upload a photo of your government-issued ID</p>
            <button className="id-upload-btn" disabled>Upload ID</button>
          </div>
          <div className="id-verification-info">
            <p style={{color: '#FD3A73', fontWeight: 500}}>Your ID will be securely reviewed for age verification.</p>
            <p style={{fontSize: '0.9rem', color: '#888'}}>We do not store your ID after verification is complete.</p>
          </div>
        </div>
      </div>
      <div>
        <p className="register-warning"> Lying about your age will result in a permanent ban from the platform </p>
        <p className="register-warning"> We strongly recomend everyone verify their account. Certain account features will be limited if your account is not verified.</p>
        <Link to="/resources"><p className='learn-text'>Learn more</p></Link>
      </div>
    </div>
    )
}

export default LoginScreen;