import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import aqImg from '../images/airQmenu.png'
import nqImg from '../images/noiseQmenu.gif'

import './VisualizerMenu.css'

function VisualizerMenu() {
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text-graphs">
          SONYC AQ and Noise Quality Visualizer App{' '}
        </h2>
        <div className="block">
          <p className="full-text">
            <br />
            <br />
            The app has been created based on evaluation of the existing Sensor
            Data Visualization research methods and tools.
            <br />
            Please select the dataset you would like to visualize:
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <div className="wrap-img1">
            <Link to="/visualizer-aq">
              <p className="full-text">Visualize Air Quality Data</p>
              <img className="menu-img" src={aqImg} alt="diagram gif" />
            </Link>
          </div>
          <div className="wrap-img1">
            <Link to="/visualizer-nq">
              <p className="full-text">Visualize Noise Level Data</p>

              <img className="menu-img" src={nqImg} alt="diagram gif" />
            </Link>
          </div>
        </div>
        <div className="clear"></div>
        <br /> <br />
        <br /> <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default VisualizerMenu
