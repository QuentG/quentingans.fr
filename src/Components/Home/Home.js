import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

import '../../css/Home.css'
import Profil from '../../img/round.png'

class Home extends Component {
    render(){
        return(
            <div className="homepage d-flex">
                <div className="profil">
                    <img src={Profil} alt="Profil Quentin Gans"/>
                </div>
                <div className="col-md-7">
                    <h1>Quentin Gans</h1>
                    <h2 className="text-secondary"><i className="fa fa-quote-left"></i> Developpeur Web</h2> 
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque ipsum eu augue vestibulum lacinia. Duis tincidunt et eros eget facilisis. Nullam id ultrices nibh. Duis tincidunt et eros eget facilisis. Nullam id ultrices nibh.</p>
                </div>
            </div>
        );
    }
}

export default Home