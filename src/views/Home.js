import React, {Component} from 'react';
import Signup from '../components/Signup';
import Navigate from '../components/common/Navigation';
import Showcase from '../components/common/Showcase';
import Service from '../components/Services';
import Footer from '../components/common/Footer';


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