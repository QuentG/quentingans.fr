import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

// Attacher mon appli à l'élément root
// Chaque component est une balise orpheline
ReactDOM.render(<App />, document.getElementById('root'))