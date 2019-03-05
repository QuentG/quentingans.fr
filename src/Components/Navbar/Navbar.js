import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../../css/Navbar.css'
import logo from '../../img/logo.png'

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3">
                    <Link to="/" className="navbar-brand" id="name">
                        <img src={logo} width="40" height="40" className="mr-2" alt="" />
                        Quentin Gans
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/parcours" className="nav-link">
                                    Parcours
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects"  className="nav-link">
                                    Projets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"  className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        );
    }
}

export default Navbar