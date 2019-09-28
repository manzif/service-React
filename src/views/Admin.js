import React, {Component} from 'react';
import HeaderAdmin from '../components/common/HeaderAdmin';
import Footer from '../components/common/Footer';
import userImage from '../assets/image/Userrepresentation.png';

class Admin extends Component {
    render(){
        return (
            <div>
                <HeaderAdmin />
                <section id="subscription">
                   <div className="container">
                     <div>
                       <img src={userImage}></img>
                    </div>
                   </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Admin