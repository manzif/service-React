import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    let error_msg = document.getElementById("error-msg2");
    let success_msg = document.getElementById("success-msg2");
    axios
      .post("http://localhost:5000/api/users", this.state)
      .then(response => {
        if (response.status !== 201) {
            console.log(response);
          error_msg.style.display = "block";
          success_msg.style.display = "none";
          error_msg.innerHTML = response.data.message;
        } else {
          console.log(response);
          error_msg.style.display = "none";
          success_msg.style.display = "block";
          success_msg.innerHTML = response.data.message;
          document.getElementById('full').value='';
          document.getElementById('ema').value='';
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { fullname, email } = this.state;
    return (
      <div>
        <section id="subscription">
          <div className="container">
            <div>
              <h1>Create account to our E-services</h1>
              <form id="signup-form" onSubmit={this.submitHandler}>
                <div id="error-msg2" className="error-msg" />
                <div id="success-msg2" className="success-msg" />
                <input
                  type="text"
                  id="full"
                  placeholder="Enter Your Names"
                  name="fullname"
                  value={fullname}
                  onChange={this.changeHandler}
                />
                <input
                  type="email"
                  id="ema"
                  placeholder="Enter Email ..."
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                />
                <button
                  type="submit"
                  className="button_1"
                  onClick={this.saveUser}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Signup;
