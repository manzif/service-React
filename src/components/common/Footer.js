import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>  {
    return (
        <div>
            <footer>
               <a href="#"><Link to={'/login'}>Administration</Link></a>
               <p>E-services, copyright &copy; 2019</p>
            </footer>
        </div>
    );
}
export default Footer