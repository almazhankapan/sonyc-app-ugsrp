import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import trakt from '../images/nyu-logo.png'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img id="trakt-logo" src={trakt} alt="Trakt Logo" />
        <a href="https://wp.nyu.edu/sonyc/" className="footer-links">
          Sounds of New York City
        </a>
      </div>
    </footer>
  )
}

export default Footer
