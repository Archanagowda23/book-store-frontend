import React from 'react'
import "./Register.css";

export default function Register() {
  return (
   
    <div>
        <h1>Hello</h1>
        <form action="action_page.php" style={{border: '1px solid #ccc'}}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <br />
          <br />
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" style={{marginBottom: '15px'}} /> Remember me
          </label>
          <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    

    </div>
  )
}
