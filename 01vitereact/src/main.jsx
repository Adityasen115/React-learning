import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',
  {
      href: 'https://google.com',
      target: '_blank',
  },
  `click here to visit google`
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
  ReactElement
  <App />
  </>
    
  
)
