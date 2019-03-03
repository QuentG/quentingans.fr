import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Home from './Components/Home/Home'
import Projets from './Components/Projets/Projets'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projets" component={Projets} />
                    <Redirect exact from="*" to="/" />
                </Switch>
            </Router>
        );
    }
}

export default App