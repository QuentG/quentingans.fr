import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"

import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Home from './Components/Home/Home'
import Parcours from './Components/Parcours/Parcours'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/parcours" component={Parcours} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App