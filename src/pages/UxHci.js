import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import hamburger from '../images/wireframes/Hamburger.png'
import home from '../images/wireframes/Home.png'
import map from '../images/wireframes/Map.png'
import log from '../images/wireframes/X2.png'
import aqGood from '../images/wireframes/X14.png'
import logFull1 from '../images/wireframes/X15.png'
import logFull2 from '../images/wireframes/X16.png'
import whatAQ from '../images/wireframes/X20.png'
import moreAQ from '../images/wireframes/X22.png'
import cig from '../images/wireframes/X23.png'
import impAQ from '../images/wireframes/X24.png'

import x2 from '../images/wireframes/X2.png'

import './UxHci.css'

function UxHci() {
  return (
    <>
      <Header />
      <div className="home-ugsrp">
        <h2 className="header-text-ugsrp">
          UX Design and Human-Computer-Interaction additions for the Sonyc app.
        </h2>
        <div className="hci-block">
          <p className="full-text">
            <br />
            <br />
            The SONYC project is accompanied by a mobile app that allows users
            to monitor the Air Quality information. <br />
            <br />
            <br />
            <br />
            <div className="float-container-hci">
              <div className="float-child">
                <p id="cig-p" className="full-text">
                  In the mobile app, in order to communicate the results of the
                  SONYC research so that non-scientific users can more easily
                  understand how the data collected affects them, we used
                  metaphors like presenting PM2.5 information collected as
                  “cigarettes smoked”.
                </p>
                <p id="cig-p" className="full-text">
                  A rule of thumb is that one cigarette per day is the rough
                  equivalent of a PM2.5 level of 22 μg/m3.
                </p>
                <p id="cig-p" className="full-text">
                  The figure to the right shows how the 'cigarettes smoked'
                  metaphor helps to convey information about PM2.5
                </p>
              </div>
              <div className="float-child">
                <img src={cig} alt="poster gif" className="hci-img" />
              </div>
            </div>
            <div className="clear"></div>
            <br />
            <br />
            <br />
            <b>
              The mobile app interface includes the following features:
            </b>{' '}
            <br />
            <br />- Users are able to see PM2.5 levels in their area within a
            24-hour period with a line that shows the acceptable limits set by
            EPA. <br />
            <br />
            - Recommendations provide users action items on what to do when the
            air in their area gets worse. <br />
            <br />
            - Users will get notifications to log the current air quality
            conditions in their area into a journal. Data from these manual logs
            can be used to establish a pattern about AQ in the area.
            <br /> <br />- AQ Knowledge Database for users to learn more about
            PM and AQI <br />
            <br />- Interactions of the app can be viewed{' '}
            <a href="https://www.figma.com/proto/onDa0SkRvfSmo6SJG7Uek5/SONYC_AQ?page-id=94%3A138&node-id=110%3A131&viewport=469%2C406%2C0.8509852290153503&scaling=min-zoom">
              here
            </a>{' '}
            and accompanying wireframes can be viewed in the figures below:
          </p>
          <div className="float-container-hci1">
            <div className="float-child-ux">
              <img src={hamburger} alt="poster gif" className="ux-img" />

              <div className="label-hci">
                Figure 1. Hamburger menu wireframe.
              </div>
            </div>
            <div className="float-child-ux">
              <img src={home} alt="poster gif" className="ux-img" />

              <div className="label-hci">Figure 2. Home page wireframe.</div>
            </div>
            <div className="float-child-ux">
              <img src={whatAQ} alt="poster gif" className="ux-img" />

              <div className="label-hci">
                Figure 3. 'Introduction to AQ' page wireframe.
              </div>
            </div>
          </div>

          <div className="float-container-hci1">
            <div className="float-child-ux">
              <img src={log} alt="poster gif" className="ux-img" />

              <div className="label-hci">Figure 4. Log AQ wireframe.</div>
            </div>
            <div className="float-child-ux">
              <img src={aqGood} alt="poster gif" className="ux-img" />

              <div className="label-hci">Figure 5. AQ Monitor wireframe.</div>
            </div>
            <div className="float-child-ux">
              <img src={map} alt="poster gif" className="ux-img" />
              <div className="label-hci">Figure 6. Map page wireframe.</div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="float-container-hci1">
            <div className="float-child-ux">
              <img src={logFull2} alt="poster gif" className="ux-img" />

              <div className="label-hci">
                Figure 7. Journal logs page wireframe.
              </div>
            </div>
            <div className="float-child-ux">
              <img src={impAQ} alt="poster gif" className="ux-img" />
              <div className="label-hci">
                Figure 8. 'Importance of AQ' page wireframe.
              </div>
            </div>
            <div className="float-child-ux">
              <img src={moreAQ} alt="poster gif" className="ux-img" />
              <div className="label-hci">
                Figure 9. 'More info about AQ' page wireframe.
              </div>
            </div>
          </div>

          <div className="clear"></div>
          <br />
          <br />
        </div>
        <br /> <br />
        <br /> <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default UxHci
