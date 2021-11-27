import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./StylingSheet.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuthenticated: false,
    };
  }
  onHandleEmail = (e) => {
    // localStorage.setItem("email2", `${this.state.email}`); // in register
    this.setState({ ...this.state, email: e.target.value });
  };
  onHandlePassword = (e) => {
    this.setState({ ...this.state, password: e.target.value });
  };

  handleSubmit = () => {
    // e.preventDefault();
    let userInputUsername = this.state.email;
    let userInputPassword = this.state.password;
    localStorage.setItem("loginState", "false");
    if (localStorage.getItem(userInputUsername)) {
      if (localStorage.getItem(userInputUsername) === userInputPassword) {
        // login
        localStorage.setItem("loginState", "true");
        alert("login successfully");
      } else {
        alert("wrong password");
      }
    } else {
      alert("please register");
      return "/Register";
    }
    let ourUsersArray = this.state.ourUsers;
    ourUsersArray.forEach((data) => {
      if (
        data.name === userInputUsername &&
        data.password === userInputPassword
      ) {
        this.setState({
          isAuthenticated: true,
          // role: data.role,
        });
      }
      // else {
      //   return "/Register";
      //   // alert("You Should Register First");
      // }
    });
  };
  handelToggle = () => {
    if (localStorage.getItem("loginState" === "false")) {
      return "/Register";
    } else return "/";
  };
  render() {
    return (
      <div>
        <form
          className="login-form"
          onSubmit={this.handleSubmit}
          action={this.handelToggle()}
        >
          <div className="login-container">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.onHandleEmail}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.onHandlePassword}
                required
              />
            </div>
            <div className="login-btn-container">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
