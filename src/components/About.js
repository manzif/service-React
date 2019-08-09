import React, {Component} from 'react';
import Signup from './Signup';
import Navigate from './Navigation';
import Showcase from './Showcase';
import Abouta from './Abouta';
import Footer from './Footer';


class Home extends Component {
    render(){
        return (
            <div>
                <Navigate />
                <Signup />
                <Abouta />
                <Footer />
            </div>
        );
    }
}
export default Home