import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './MeetTheTeam.css'
import image from '../images/stock-user-white.png'

function MeetTheTeam() {
  return (
    <>
      <body id="meet">
        <Header />
        <div className="header">
          <h1 id="team-header">People</h1>
        </div>
        <div className="content-intro">
          <p>
            This web app displays outputs of the summer research work conducted
            by James, Matahari, Alma under supervision of Professor Dove and
            Professor Mydlarz. The web app is built by Alma using ReactJS,
            NodeJS, Plotly. <br />
            Some texts and images are provided by the official SONYC website,
            supervisors and student researchers.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>
            Graham Dove, Research Assistant Professor, New York University
          </h4>
          <a href="https://www.codesignwithdata.com/">Personal Webpage</a>
          <p>
            Professor Dove is leading the UGSRP SONYC project in Summer 2021. He
            is a a human-computer interaction design researcher, currently
            working as Research Assistant Professor at the Center for Urban
            Science and Progress (CUSP), Tandon School of Engineering, New York
            University. Professor Dove's research focuses on user centered and
            participatory approaches to designing data-enabled products,
            services, and artifacts, and human engagement with machine-learning.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>
            Charlie Mydlarz, Research Assistant Professor, New York University
          </h4>
          <a href="https://www.cmydlarz.com/">Personal Webpage</a>
          <p>
            Professor Mydlarz is leading the UGSRP SONYC project in Summer 2021.
            He is a a Senior Research Scientist at the Sounds of New York City
            lab.
          </p>
        </div>

        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>
            James Venditto, UGSRP Student Researcher and Developer, University
            of Notre Dame
          </h4>
          <a href="https://github.com/JVenditto">GitHub</a>
          <p>
            James Venditto is an Electrical Engineering student at University of
            Notre Dame who worked on collecting and analyzing the Air Quality
            sensor data that power the visualization interface. Learn more about
            the data collection and analysis process{' '}
            <a href="https://github.com/sonyc-project/sonycAQ">here</a>.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>
            Alma Kapan, UGSRP Student Researcher and Developer, New York
            University
          </h4>
          <a href="https://github.com/almazhankapan">GitHub</a>
          <p>
            Alma Kapan is a student at New York University, an UGSRP Summer 2021
            participant, who worked on data visualization research and created
            interface to visualize the AQ and noise level data. You can learn
            more about data visualization research <a href="/datavis">here</a>{' '}
            and view project code{' '}
            <a href="https://github.com/almazhankapan/sonyc-app-ugsrp">here</a>.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>
            Matahari K Herwin, UGSRP Student Researcher and Developer, New York
            University
          </h4>
          <a href="https://github.com/irahatam">Github</a>
          <p>
            Matahari is a student at New York University and an UGSRP 2021
            participant who was actively involved in creating the prototype for
            the Air Quality addendum for the SONYC mobile app (ongoing work).
            You can view app interactions{' '}
            <a href="https://www.figma.com/proto/onDa0SkRvfSmo6SJG7Uek5/SONYC_AQ?page-id=94%3A138&node-id=94%3A141&viewport=469%2C406%2C0.8509852290153503&scaling=min-zoom">
              here
            </a>
          </p>
        </div>

        <Footer />
      </body>
    </>
  )
}

export default MeetTheTeam
