import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PassGen from './PassGen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PassGen />
  </StrictMode>,
)
