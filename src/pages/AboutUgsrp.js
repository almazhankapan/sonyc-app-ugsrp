import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import poster from '../images/poster.png'
import airq from '../images/airq.jpg'
import { Link } from 'react-router-dom'

import './AboutUgsrp.css'

function AboutUgsrp() {
  return (
    <>
      <Header />
      <div className="home-ugsrp">
        <h2 className="header-text-ugsrp">
          SONYC project at Undergraduate Summer Research Program 2021.
        </h2>
        <div className="block">
          <p className="full-text">
            <br />
            <br />
            NYU Tandon School of Engineering’s Undergraduate Summer Research
            Program (UGSRP) provides a unique opportunity for NYU Tandon, NYU
            Abu Dhabi, NYU Shanghai, NYU CAS + Tandon Dual Degree Program, and
            other select US students to engage in research over the course of
            the summer semester. Learn more about UGSRP{' '}
            <a href="https://engineering.nyu.edu/research-innovation/student-research/undergraduate-summer-research-program">
              here
            </a>
            . <br />
            <br />
            Students work with their faculty mentors on various research topics
            while also participating in seminars presented by distinguished
            administrative and academic personnel. In addition, research
            presentations and poster sessions are held in which students have
            the opportunity to present their research to peoples of all
            disciplines and backgrounds.
          </p>
          <br />
          <p className="full-text">
            <br />
            <br />
            In the Summer of 2021, The Sounds of New York City lab also took
            part in the UGSRP program where under the supervision of Professor
            Graham Dove and Professor Oded Nov, students worked on sensor data
            collection, analysis, visualization and UX, Human Computer
            Interaction design. Below you can view the poster of the project
            which is also available at the NYU Tandon web{' '}
            <a href="https://photos.google.com/share/AF1QipP5wgXtnA_SQaLtKfotCmlaSONpKIWKwV8Kv_Ha5NBArBSWs87vRf_2leGrKLGgWQ?key=ZXI4b1IzSzFsbkY5OWVlQlIxbjdKbVZjRmxwZ2ZR">
              poster session
            </a>
            .
          </p>
          <br />
          <figure>
            <img src={poster} alt="poster gif" className="gif-img" />
            <figlabel>
              SONYC project poster at Undergraduate Summer Research Program 2021
            </figlabel>
          </figure>
        </div>
        <div className="block">
          <h4 className="gif-text"> I. Summer Project Objectives </h4>
          <p className="full-text">
            {' '}
            1. Develop an Air Quality (AQ) addendum to the existing Sounds of
            New York City (SONYC) noise-monitoring infrastructure Research.
            <br />
            <br />
            2.Research and implement new methods for visualizing AQ and sound
            monitoring data for a non-scientific audience.
          </p>
        </div>
        <div className="block">
          <h4 className="gif-text"> II. Background Research</h4>
          <h5 className="gif-text-h5"> Citizen Science</h5>
          <p className="full-text">
            {' '}
            Citizen science is collaborative research done by non-professionals,
            by and for the community. We believe the best way to effectively
            assess air pollution in urban NYC neighborhoods is to monitor at the
            residential level, involving communities impacted by air pollution
            in data collection, as well as data visualization. Thus, our
            non-scientific audience will be to appreciate the implications of
            the data.
          </p>
          <h5 className="gif-text-h5">
            {' '}
            Air Pollution and Particulate Matter (PM)
          </h5>
          <p className="full-text">
            {' '}
            Air pollution poses significant health risks to urban populations,
            notably for the elderly, immigrants, and people of color. Many
            residents of New York City fall into one or more of these
            categories, placing them at higher risk for air pollution-related
            medical issues.
            <figure>
              <img src={airq} alt="air1" className="gif-img-sm" />
              <figlabel>
                Size comparison for PM particles. Source:{' '}
                <a href="https://www.sciencelearn.org.nz/images/1869-size-comparisons-for-pm-particles">
                  Sciencelearn.org
                </a>
              </figlabel>
            </figure>
            <br />
            Particulate Matter is all particles ≤ a certain diameter (in μm)
            within the air, varying in size, composition, and origin; many are
            hazardous. PM2.5 particularly are linked to adverse health effects.
          </p>
          <h5 className="gif-text-h5"> Noise Quality and Air Pollution</h5>
          <p className="full-text">
            Research shows a potentially strong correlation between noise and
            air pollution. Machine learning models show that using the impact of
            noise pollution as a feature improves accuracy of air pollution
            level predictions. In contrast with air pollution, noise pollution
            continues to increase in developed countries and, yet, there are
            rarely strict limits for community noise levels.
          </p>
          <h5 className="gif-text-h5"> Sensor Data Visualization Research</h5>
          <p className="full-text">
            Learn more about an overview of state-of-the-art Sensor Data
            Visualization research methods, tools and challenges on the{' '}
            <a href="/data-visualization">
              Data Visualization and Research page.
            </a>
          </p>
        </div>
        <div className="block">
          <h4 className="gif-text">III. Methods</h4>
          <h5 className="gif-text-h5">Data Collection</h5>
          <p className="full-text">
            Have an overview of the steps for collecting, processing and
            analyzing the Air Quality sensor data on the
            <a href="/data-collection">
              {' '}
              Sensor Data Collection and Analysis
            </a>{' '}
            page.
          </p>
          <h5 className="gif-text-h5">Data Visualization</h5>
          <p className="full-text">
            Interact with the graphs that were developed based on earlier{' '}
            <a id="refer" href="/data-visualization">
              Sensor Data Visualization research
            </a>{' '}
            on the <a href="/visualizer">the Data Visualization Interface</a>{' '}
            page. The graphs visualize both Air Quality and Noise Level sensor
            data.
          </p>
          <h5 className="gif-text-h5">
            UX and Human Computer Interaction design
          </h5>
          <p className="full-text">
            Learn about UX and Human Computer Interaction design implementations
            for the SONYC mobile app on the <a href="/hci">UX and HCI design</a>{' '}
            page.
          </p>
        </div>
        <div className="block">
          <h4 className="gif-text">IV. Conclusions</h4>
          <p className="full-text">
            At the end of the program, we now have: <br />
            <br />
            - Code for reading our sensor values and saving formatted PM data
            Code for compiling data, and plotting various information we might
            choose <br />
            <br />
            - Sample data runs and sample notebooks that can be used for future
            reference regarding trends and sensor behavior
            <br /> <br />
            - Sample data runs and sample notebooks that can be used for future
            reference regarding trends and sensor behavior
            <br />
            <br /> - React web application that allows public users to select
            dataset (air quality, noise quality datasets), graph type (e.g.
            histogram, box plot), and visualize the data <br />
            <br />
            <br />
            - Compilation of current research methods and tools to visualize the
            sensor data.
            <br />
            <br />
            - Prototype for the AQ extension of the SONYC mobile application
            <br />
          </p>
          <br />
        </div>
        <br /> <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default AboutUgsrp
