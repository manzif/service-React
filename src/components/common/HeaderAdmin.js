import React from 'react';
import '../../styles/style.css';
import { Link } from 'react-router-dom';

const HeaderAdmin= () => {
        return (
            <div>
                <header>
                <div className="container">
                        <div id="branding">
                        <h1><span className="highlight">E</span>-Service</h1>
                        </div>
                        <nav>
                        <ul>
                            <li className="current"><Link to={'/admin'}>Admin</Link></li>
                            <li><Link to={'/allusers'}>Users</Link></li>
                            <li><Link to={'/'}>Log Out</Link></li>
                        </ul>
                        </nav>
                </div>
                </header>
            </div>
        );
}
export default HeaderAdmin
