import React, {Component} from 'react'

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'

class Footer extends Component {
    render(){
        return(
            <div className="container mb-3 fixed-bottom">
                <div className="row">
                        <div className="row">
                            <div className="col-md-4">
                                <a href="https://www.linkedin.com/in/quentin-gans-8254b5160/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} width="50px" alt="Linkedin"/></a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://github.com/QuentG" target="_blank" rel="noopener noreferrer"><img src={Github} width="50px" alt="Github"/></a>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Footer