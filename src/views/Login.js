import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();

    let email = this.state.email;
    let password = this.state.password;
    let error_msg = document.getElementById('error-msg3');

    fetch('https://e-services-manzi.herokuapp.com/api/users/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          window.location = "/admin"
        } else {
          error_msg.style.display = 'block';
          error_msg.innerHTML = data.error;
        }
      });
  };

    render(){
        return (
            <div>
                <div className="login-body">
                    <div className="login-box">
                      <div id="error-msg3" className="error-msg"></div>
                          <form id="signin-form" onSubmit={this.submitHandler}>
                            <h1>Login</h1>
                            <div className="textbox">
                              <i className="fas fa-user"></i>
                                    <input type="email" 
                                    placeholder="Email" 
                                    name="email" 
                                    id="username" 
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                    />
                            </div>
                            <div className="textbox">
                              <i className="fas fa-lock"></i>
                                    <input type="password" 
                                    placeholder="Password" 
                                    name="password" 
                                    id="password" 
                                    value={this.state.password}
                                    onChange={this.changeHandler}
                                    />
                            </div>
                            <input className="btn" type="submit" value="Signin" name="" />
                          </form>
                    </div>
                  </div>
            </div>
        );
    }
}
export default Login
