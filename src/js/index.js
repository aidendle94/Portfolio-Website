import React from 'react'
import ReactDOM from 'react-dom'

import Home from 'Home.js'
import statements from 'content/aboutme_content'

ReactDOM.render(
  <Home statements={statements}/>,
  document.getElementById('app')
);
