import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App