import React, {Component} from 'react';
import '../styles/login.css';
import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';

class Login extends Component {
    render(){
        return (
            <div>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>LogIN | Welcome</title>
    <link rel="stylesheet" href="../fontawesome-free/css/all.css" />
  </head>
  <body>
    <div class="login-box">
      <div id="error-msg3" class="error-msg"></div>
      <form id="signin-form">
        <h1>Login</h1>
        <div class="textbox">
          <i class="fas fa-user"></i>
          <input type="email" placeholder="Email" name="" id="username" />
        </div>
        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" name="" id="password" />
        </div>
        <input class="btn" type="submit" value="Signin" name="" />
      </form>
    </div>
    </body>
</div>
        );
    }
}
export default Login
