import React, {Component} from 'react';
import Signup from '../components/Signup';
import Navigate from '../components/common/Navigation';
import Abouta from '../components/common/Abouta';
import Footer from '../components/common/Footer';


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