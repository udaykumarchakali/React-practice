import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
// import Form from './FORM/Form'
// import Props from './Props/Props'
import Exam from './Example/Ex'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exam/>
  </StrictMode>,
)
