import React, {Component} from 'react';
import '../../styles/App.css';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render(){
        return (
            <div>
                <footer>
                   <a href="#"><Link to={'/login'}>Administration</Link></a>
                   <p>E-services, copyright &copy; 2019</p>
                </footer>
            </div>
        );
    }
}
export default Footer