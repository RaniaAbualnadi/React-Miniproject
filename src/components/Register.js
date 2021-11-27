import React, { Component } from "react";
import "./StylingSheet.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    });
  };
  reg = (e) => {
    e.preventDefault();
    console.log(this.state.email + "-" + this.state.password);
    if (!localStorage.getItem(this.state.email)) {
      // register
      localStorage.setItem(this.state.email, this.state.password);
    } else {
      alert("You are already registered ");
    }
  };

  render() {
    return (
      <div>
        <form id="form" className="form registerForm ">
          <div className="register-container">
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="userName"
                required
                onChange={(e) => {
                  this.handleChange(e, "username");
                }}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                onChange={(e) => {
                  this.handleChange(e, "email");
                }}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => {
                  this.handleChange(e, "password");
                }}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="passwordcheck">Repeat Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={(e) => {
                  this.handleChange(e, "confirmPassword");
                }}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <button className="sub-btn" onClick={this.reg}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
