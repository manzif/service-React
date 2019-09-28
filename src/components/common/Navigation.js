import React from 'react';
import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';

const Navigate = () => {
        return (
            <div>
                <header>
                <div className="container">
                        <div id="branding">
                        <h1><span className="highlight">E</span>-Service</h1>
                        </div>
                        <nav>
                        <ul>
                            <li className="current"><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/postservice'}>Post a Service</Link></li>
                        </ul>
                        </nav>
                </div>
                </header>
            </div>
        );
}
export default Navigate
