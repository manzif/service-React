import React, {Component} from 'react';
import Home from './views/Home';
import About from './views/About';
import PostService from './views/PostService';
import Login from './views/Login';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';


class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/postservice' component={PostService}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </Router>
        );
    }
}
export default App