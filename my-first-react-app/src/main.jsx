import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting.jsx'
import { FriedChicken, UnfriedChicken } from './FriedChicken.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <FriedChicken />
    <UnfriedChicken />
  </React.StrictMode>,
)
