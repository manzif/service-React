import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import PostService from './PostService';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';


class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/postservice' component={PostService}/>
                </Switch>
            </Router>
        );
    }
}
export default App