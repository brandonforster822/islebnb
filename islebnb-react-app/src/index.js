import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import configureStore from './store'
import { Provider } from 'react-redux'

const store = configureStore()

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)