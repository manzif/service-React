import React, {Component} from 'react';
import Signup from './Signup';
import Navigate from './Navigation';
import Showcase from './Showcase';
import Service from './Services';
import Footer from './Footer';


class Home extends Component {
    render(){
        return (
            <div>
                <Navigate />
                <Showcase />
                <Signup />
                <Service />
                <Footer />
            </div>
        );
    }
}
export default Home