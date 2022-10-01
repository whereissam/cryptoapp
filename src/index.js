import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'antd/dist/antd.css'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)


