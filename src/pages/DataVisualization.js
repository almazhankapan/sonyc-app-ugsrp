import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import lit1 from '../images/lit1.png'
import lit2 from '../images/lit2.png'
import lit3 from '../images/lit3.png'
import lit4 from '../images/lit4.png'
import lit5 from '../images/lit5.png'
import lit1a from '../images/lit1a.png'
import lit2a from '../images/lit2a.png'
import bch1 from '../images/bch1.png'
import bch2 from '../images/bch2.png'
import bch3 from '../images/bch3.png'
import lc1 from '../images/lc1.png'
import lc2 from '../images/lc2.png'
import lc3 from '../images/lc3.png'
import ng1 from '../images/ng1.png'
import ng2 from '../images/ng2.png'
import ng3 from '../images/ng3.png'
import rc1 from '../images/rc1.png'
import rc2 from '../images/rc2.png'
import rc3 from '../images/rc3.png'
import rc4 from '../images/rc4.png'
import wa1 from '../images/wa1.png'
import wa2 from '../images/wa2.png'
import wa3 from '../images/wa3.png'
import wa4 from '../images/wa4.png'
import bc1 from '../images/bc1.png'
import bc2 from '../images/bc2.png'
import bc3 from '../images/bc3.png'
import ReactDOM from 'react-dom'
import Carousel from '../components/Carousel'
import { LazyImageProvider } from '../components/LazyImageContext'
import LazyImage from '../components/LazyImage'
//import './index.css'
import granular from '../images/granular.png'
import './DataVisualization.css'
import Collapsible from 'react-collapsible'

function DataVisualization() {
  const images = [lc1, lc2, lc3]
  const imagesRc = [rc1, rc2, rc3, rc4]
  const imagesNg = [ng1, ng2, ng3]
  const imagesBg = [bc1, bc2, bc3]
  const imagesBcg = [bch1, bch2, bch3]
  const imagesWa = [wa1, wa2, wa3, wa4]

  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">Data Visualization</h2>
        <div className="block">
          <p className="full-text">
            Sensors are used to measure Air and Noise Pollution levels and
            visualizing this data is the first and crucial step in interpreting
            and making decisions about the data. We conducted research to
            evaluate and review state-of-the-art approaches towards visualizing
            the Noise and Air sensor data in web and mobile interface, current
            challenges in visualizing the sensor data.
          </p>
          <br />
        </div>
        <div className="block">
          <h4 className="gif-text">Data Visualization Research Review</h4>

          <div>
            <p className="full-text">
              <b>
                {' '}
                Guess the Data: Data Work to Understand How People Make Sense of
                and Use Simple Sensor Data from Homes .Albrecht Kurze, Andreas
                Bischof, Sören Totzauer, Michael Storz, Maximilian Eibl, Margot
                Brereton, and Arne Berger. 2020.
              </b>
              <i>
                Proceedings of the 2020 CHI Conference on Human Factors in
                Computing Systems
              </i>
              . Association for Computing Machinery, New York, NY, USA, 1–12.
              DOI:https://doi.org/10.1145/3313831.3376273
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                The authors investigate human sensemaking of such sensor data
                can reveal domestic activities and to achieve that task, develop
                and field-test the Guess the data method,which enabled people to
                use and make sense of live data from their homes and to
                collectively interpret and reflect on anonymized data from the
                homes in the study. The authors decided to use simple line
                graphs as data visualizations for temperature, light level,
                humidity, barometric pressure and movement (accelerometer
                values). They wanted to undertake very little pre-processing,
                presenting close to ‘raw’ data, to prevent interpretation bias.
                Such simple time series graphs are comparable to those used in
                other cited studies. The findings show how participants
                reconstruct behavior, both individually and collectively, expose
                the sensitive personal data of others, and use sensor data as
                evidence and for lateral surveillance within the household.
                <br />
                Visualized sensor data used as evidence and proof: Participants
                used visualized data to confirm their assumptions about other
                residents’ behavior, not only retrospectively during discussions
                but also pro-actively during data collection when they had
                access to it. For example, a participant corrected the partner’s
                careless behavior regarding the light in the hallway (figure 3),
                which he often forgot to turn off. She confronted him with the
                visualization of the light sensor data, and “he was a little bit
                shocked” (II.A)
              </p>
              <img src={lit1} alt="poster gif" className="vis-img" />
            </Collapsible>
            <br />
          </div>

          <div>
            <p className="full-text">
              <br />
              <b>
                Nicolas Maisonneuve, Matthias Stevens, Maria E. Niessen, Peter
                Hanappe, and Luc Steels. 2009. Citizen noise pollution
                monitoring.
              </b>
              In{' '}
              <i>
                Proceedings of the 10th Annual International Conference on
                Digital Government Research: Social Networks: Making Connections
                between Citizens, Data and Government
              </i>{' '}
              (<i>dg.o '09</i>). Digital Government Society of North America,
              96–103. https://dl.acm.org/doi/10.5555/1556176.1556198
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                In this paper, authors present a new approach to monitor noise
                pollution involving citizens who can measure their personal
                exposure to noise in their everyday environment by using
                GPS-equipped mobile phones as noise sensors. The geo-localised
                measures and user-generated meta-data can be automatically sent
                and shared online with the public to contribute to the
                collective noise mapping of cities. The prototype called Noise
                Tube can be found online. This application collects local
                information from different sensors (noise level, GPS
                coordinates, time, user input) and sends them to the NoiseTube
                server which visualizes the noise level data. The server
                centralises and processes the data sent by the phones.
                <br />
                <br />
                The mobile application contains a real-time signal processing
                algorithm which measures the loudness level of the microphone
                recording the environmental sound (at 22500 Hz, 16 bits) over 1
                second at a chosen interval. On top of the sensing of the
                loudness a real time visualization is displayed on the phone
                with the decibels. To add meaning to this value it is associated
                with a colour that represents the health risk of the current
                exposure level: less than 70: green (no risk); between 70 and
                80: yellow (be careful); more than 80: red (risky). See figure 2
                below.
                <br />
                <br />
                <img src={lit2} alt="poster gif" className="vis-img" />
                <br />
                In addition to measured loudness, the app allows to record the
                source or context of noise, which is not always available but
                remains important. Especially because the appreciation of sound
                and loudness is a subjective matter – i.e. the perceived
                annoyance (or pleasure) does not always correlate with its
                loudness (see 6.2). Context is recorded through environmental
                tagging (source of a noise e.g.: cars, aircraft, neighbours and
                an annoyance rating/tag) and geo-tagging (gps positioning or
                place tags (such as “home”, “work”, the name of the subway
                station, ...) Geo-tagging feature we can reconstruct the
                geo-coordinates afterwards notably for indoor locations (cf.
                subway noise map in figure 3).
                <br />
                <img src={lit3} alt="poster gif" className="vis-img" />
                <br />
                <br />
                Visualizing Noise Maps. Once the measured data is sent to the
                server, any user can see his own contributions or exposures by
                going to the NoiseTube website and visualizing them on a map
                thanks to Google Earth. The collective noise map is also
                publicly available constructed by aggregating all the shared
                participants. Each map can show a layer of participants to add
                context and meaning to the loudness data. The authors also allow
                users embed this as a web widget into their personal web pages
                and provide publicly accessible web API to give full access to
                third parties such scientists or developers can use individual
                or collective exposure data to create web mash-ups or analyse
                data for scientific purposes.
              </p>
            </Collapsible>
            <br />
          </div>
          <div>
            <p className="full-text">
              <br />
              <b>
                Silvia Santini, Benedikt Ostermaier, and Andrea Vitaletti. 2008.
                First experiences using wireless sensor networks for noise
                pollution monitoring.{' '}
              </b>
              In{' '}
              <i>
                Proceedings of the workshop on Real-world wireless sensor
                networks
              </i>{' '}
              (<i>REALWSN '08</i>). Association for Computing Machinery, New
              York, NY, USA, 61–65. DOI:https://doi.org/10.1145/1435473.1435490
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                The authors focus on the assessment of environmental noise
                pollution in urban areas and provide a feasibility analysis of
                wireless sensor networks. They also present a prototype for the
                collection and logging of noise pollution data based on the
                Tmote invent prototyping platform, using which they performed
                indoor and outdoor noise pollution measurements. They also
                present tinyLAB, a Matlab-based tool developed in the context of
                this work, which enables real-time acquisition, processing and
                visualization of data collected in wireless sensor networks.
                Authors mention that prototyping wireless sensor network
                applications often requires visualizing the sensor data to
                quickly identify any malfunctioning. For example, figure 1 shows
                the responses to these acoustic events of four different nodes,
                clearly pointing out a misalignment in the measured equivalent
                noise levels. <br />
                <br />
                <img src={lit4} alt="poster gif" className="vis-img" />
                <br />
                <br />
                Additionally, authors mention that current tools often do not
                provide satisfactory data processing and visualization features
                and propose using Matlab as it serves scientists in managing,
                processing and visualizing their data and appears therefore
                particularly well-suited to be used in the context of wireless
                sensor networks. Authors develop tinyLAB, a simple framework
                that allows to receive and send messages from and to a sensor
                network and to visualize and process data as it comes from the
                network. tinyLAB is implemented relying solely on the Matlab
                software suite and offers a simple API to receive and send data.
              </p>
            </Collapsible>
            <br />
          </div>
          <div>
            <p className="full-text">
              <br />
              <b>
                Ann-sofie Gunnarsson, Malinda Rauhala, Anders Henrysson, and
                Anders Ynnerman. 2006. Visualization of sensor data using mobile
                phone augmented reality.{' '}
              </b>
              In{' '}
              <i>
                Proceedings of the 5th IEEE and ACM International Symposium on
                Mixed and Augmented Reality
              </i>{' '}
              (<i>ISMAR '06</i>). IEEE Computer Society, USA, 233–234.
              DOI:https://doi.org/10.1109/ISMAR.2006.297820
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                The authors developed a prototype system for visual inspection
                of hidden structures using a mobile phone wireless ZigBee sensor
                network. Data collected from an embedded wireless sensor matrix
                is used to synthesize AR visualizations in real-time. The AR
                visualization is providing the user with an instant insight
                concerning the status of the element being augmented. The
                authors arrange sensors in a grid (e.g. a matrix), which allows
                to take an approach where individual sensors emerge as pixels in
                an image when their data is translated into color values. See
                below an image that shows a mobile application overview.
                <br />
                <br />
                <img src={lit5} alt="poster gif" className="vis-img" />
                <br /> <br />
                Authors argue that AR is an ideal way to present such context
                related visualizations since it eliminates the focus switching
                between the visualization domain (image) and problem domain
                (real world). The sensors measure the relative humidity (RH) at
                the location of the sensor, providing with data from a discrete
                set of measure points in 3D. The values between the measure
                points are interpolated creating a continuous visualization
                which provides the user an overview of the humidity values as
                well as their distribution. The mobile phone application
                contains a visualization engine and a communication layer. The
                interpolation is performed in real time and every time a new
                sensor value is retrieved from the sensor network the
                visualization is updated. Two visualization options are
                implemented, one fully continuous, see Figure below, while the
                other is composed of small quadratic units, separated using full
                transparency. Authors believe that the user experiences a better
                sense of orientation when less background information is covered
                by the visualization.
                <br />
              </p>
            </Collapsible>
            <br />
          </div>

          <div>
            <p className="full-text">
              <br />
              <b>
                Sapan Tanted, Anshul Agarwal, Shinjan Mitra, Chaitra Bahuman,
                and Krithi Ramamritham. 2020. Database and Caching Support for
                Adaptive Visualization of Large Sensor Data.
              </b>{' '}
              <br />
              In{' '}
              <i>
                Proceedings of the 7th ACM IKDD CoDS and 25th COMAD( CoDS COMAD
                2020
              </i>
              ). Association for Computing Machinery, New York, NY, USA, 98–106.
              DOI:https://doi.org/10.1145/3371158.3371170
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                <br />
                The authors discuss visualization of large amounts of sensor
                data ( time series data) and the design, implementation and
                performance of an aggregation mechanism to faciliate the former
                task. Authors advise against displaying too many data points on
                a single screen as it can make the visualization slow, increase
                network usage and render the interface less informative and
                cluttered. They note that techniques like filtering, sampling
                and aggregation are commonly used in visualization systems to
                reduce the number of data points displayed. Authors state that
                the existing visualization systems are found to be inadequate in
                handling the inflow of large volumes of data. They propose a
                system that combines aggregation and caching techniques to
                implement a robust solution that helps visualization of large
                amounts of sensor data. Authors used Grafana as a visualization
                interface for their experiments since it is a widelyused
                open-source tool, provides data customization and allows
                creating dashboards with attractive visualizations. The
                technique proposed in this paper follows a hybrid approach where
                aggregation is performed on-demand, and aggregation of future
                requests is also taken into consideration. Thus, it requires
                less space for storing the aggregated data, with minimal delays
                experienced by users. The proposed approach is independent of
                the visualization tool and databases and integrates well with
                existing systems. <br />
                <br />
                <img src={lit1a} alt="poster gif" className="vis-img" />
                <br />
                <br />
                One sample visualization from the project is the comparison
                between the power consumption of two labs - as visualizing raw
                data for one year is not possible, the system aggregates and
                visualizes the data as shown in Figure 5, which shows the power
                consumption of appliances (lights and fans) of two labs (lab1 -
                green, lab2 - orange) in the building for a period of one month.
                The user can zoom in to the desired section to view lower
                granularity data, based on the visual inspection of this graph.
                The visualization interface enables a smooth transition between
                granularities to provide rich user experience as shown in Figure
                6.
                <br />
                <br />
                <img src={granular} alt="poster gif" className="vis-img" />
              </p>
            </Collapsible>
            <br />
          </div>
          <div>
            <Collapsible
              trigger="View more Data Visualization Research paper reviews "
              className="full-text"
            >
              {' '}
              <div>
                <p className="full-text">
                  <br />
                  <b>
                    Ivan Logre, Sébastien Mosser, and Michel Riveill. 2015.
                    Composition challenges for sensor data visualization.
                  </b>
                  <br />
                  In{' '}
                  <i>
                    Companion Proceedings of the 14th International Conference
                    on Modularity
                  </i>{' '}
                  (<i>MODULARITY Companion 2015</i>). Association for Computing
                  Machinery, New York, NY, USA, 25–26.
                  DOI:https://doi.org/10.1145/2735386.2735927
                </p>
                <Collapsible trigger="Read More" className="full-text">
                  <p className="full-text">
                    <br />
                    The paper discusses the visualization dashboards and argues
                    that the technologies that are used to design and implement
                    them are poor from the software engineering point of view.
                    This paper highlights how this domain could benefit from
                    leveraging separation of concerns and software composition
                    paradigms to support dashboard design. In particular, the
                    authors argue that unfortunately, the tools available to
                    design and implement such dashboards are holistic and do not
                    take into account the inherent modularity of this domain.
                    Authors mention that the design and implementation of a
                    visualization dashboard involves three roles: 1. a
                    Requirement Engineer (RE); 2. a Data Manager (DM); 3. a
                    Dashboard Designer (DD). <br />
                    <br />
                    According to the authors, to implement a given dashboard,
                    one can usually use visualization widget libraries, either
                    professional solutions such as HighChart1 and AmChart2 or
                    community-based libraries such as D3.JS3 . Then, one will
                    add HTML5/CSS code to structure the result. However, those
                    widgets do not allow their integration with a lot of data
                    format, since the development effort is put on the
                    interaction aspect instead of the interoperability. In
                    addition, the huge amount of available widgets (e.g., D3.js
                    offers 235 widgets on January 2015) increase the difficulty
                    to select a suitable visualization. There is a lack of
                    effort in the categorization of those new visualization
                    capabilities. According to the authors, these last two
                    points strengthen the difficulty to cooperate with other
                    domains, considering the gap between the conceptual role of
                    the RE and the implementation role of the DD, and because of
                    the incompatible constraints imposed by the chosen libraries
                    on data format then reduce reusability. <br />
                    This paper does not aim to describe a solution, but instead
                    focuses on the challenges triggered by the design of
                    visualization dashboards, and align them with modular
                    paradigms such as separation of concerns and software
                    composition.
                    <br />
                    <br />
                    <img src={granular} alt="poster gif" className="vis-img" />
                  </p>
                </Collapsible>
                <br />
              </div>
              <div>
                <p className="full-text">
                  <br />
                  <b>
                    Felix G. Hamza-Lup, Ionut E. Iacob, and Sushmita Khan. 2019.
                    Web-enabled Intelligent System for Continuous Sensor Data
                    Processing and Visualization.
                  </b>
                  <br />
                  In{' '}
                  <i>
                    The 24th International Conference on 3D Web Technology
                  </i>{' '}
                  (<i>Web3D '19</i>). Association for Computing Machinery, New
                  York, NY, USA, 1–7.
                  DOI:https://doi.org/10.1145/3329714.3338127
                </p>
                <Collapsible trigger="Read More" className="full-text">
                  <p className="full-text">
                    <br />
                    The authors focus on real-time data processing and 3D
                    visualization in web-based user interfaces that facilitate
                    spatial information understanding and sharing. In their
                    research, they provide a prototype system for near
                    real-time, continuous X3D-based visualization of processed
                    sensor data for two significant applications: thermal
                    monitoring for residential/commercial buildings and nitrogen
                    cycle monitoring in water beds for aquaponics systems. The
                    data processing is a three steps process: (i) collect
                    real-time data from sensors, (ii) process the data, and
                    (iii) visualize the information as a spatio-temporal matrix.
                    <br />
                    <br />
                    <img src={lit2a} alt="poster gif" className="vis-img" />
                  </p>
                </Collapsible>
                <br />
              </div>
              <div>
                <p className="full-text">
                  <br />
                  <b>
                    Hironobu Takagi, Chieko Asakawa, Kentarou Fukuda, and Junji
                    Maeda. 2003. Accessibility designer: visualizing usability
                    for the blind.
                  </b>
                  <br />
                  In{' '}
                  <i>
                    Proceedings of the 6th international ACM SIGACCESS
                    conference on Computers and accessibility
                  </i>{' '}
                  (<i>Assets '04</i>). Association for Computing Machinery, New
                  York, NY, USA, 177–184.
                  DOI:https://doi.org/10.1145/1028630.1028662
                </p>
                <Collapsible trigger="Read More" className="full-text">
                  <p className="full-text">
                    <br />
                    The authors develop Accessibility Designer (aDesigner),
                    which has capabilities to visualize blind users' usability
                    by using colors and gradations. The visualization function
                    allows Web designers to grasp the weak points in their
                    pages, and to recognize how accessible or inaccessible their
                    pages are at a glance. This paper provides an extensive
                    literature review and describes an approach to visualize
                    blind users' usability followed by an overview of
                    Accessibility Designer and also report on the evaluations of
                    real Web sites using Accessibility Designer.
                  </p>
                </Collapsible>
                <br />
              </div>
              <div>
                <p className="full-text">
                  <br />
                  <b>
                    {' '}
                    Arne Bröring, David Vial, and Thorsten Reitz. 2014.
                    Processing real-time sensor data streams for 3D web
                    visualization.{' '}
                  </b>
                  <br />
                  In{' '}
                  <i>
                    Proceedings of the 5th ACM SIGSPATIAL International Workshop
                    on GeoStreaming (IWGS '14
                  </i>
                  ). Association for Computing Machinery, New York, NY, USA,
                  72–80. DOI:https://doi.org/10.1145/2676552.2676556
                </p>
                <Collapsible trigger="Read More" className="full-text">
                  <p className="full-text">
                    <br />
                    The data streams produced by sensors often update with high
                    frequencies, resulting in large data volumes. Being able to
                    analyze those real-time sensor data streams requires
                    efficient visualization techniques. The authors explore how
                    3D visualizations can be used to extend the available
                    information space. More specifically, they present an
                    approach for processing real-time sensor data streams to
                    enable scalable Web-based 3D visualizations. Based on an
                    event-driven architecture, the key contribution is the
                    presentation of three processing patterns to optimize
                    transmission of sensor data streams to 3D Web clients.
                  </p>
                </Collapsible>
                <br />
              </div>
              <div>
                <p className="full-text">
                  <br />
                  <b>
                    Optional, non-academic source: <br />
                    Miller, Inclusive Design: How to Build Accessible Data
                    Visualization | Betterment: 2020.
                    https://www.betterment.com/resources/accessible-data-visualization/.
                    Accessed: 2021.
                  </b>
                  <br />
                </p>
                <Collapsible trigger="Read More" className="full-text">
                  <p className="full-text">
                    <br />
                    The author discusses common accessibility rules that
                    developers should consider when designing a web application.
                    Although this article is non-academic, it references
                    official World Wide Web Consortium guidelines on web
                    accessibility rules.
                  </p>
                </Collapsible>
                <br />
              </div>
            </Collapsible>
          </div>
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Sensor Data Visualization Challenges </h4>
          <p className="full-text">
            Visualizing large amounts of temporal data requires balancing the
            goals of achieving high performance and interactivity. Given that
            Air Quality and Noise level data collected at SONYC is longitudinal
            (data is collected sequentially over time), aggregate visualization
            requires plotting multiple data points that reference a value at a
            certain day, hour and in some cases, minute.
            <br /> <br />
            However, displaying too many data points on a single screen can make
            the visualization slow, increase network usage and render the
            interface less informative and cluttered.
            <br /> <br />
            One solution lies in intelligently aggregating the data to higher
            granularities, so that the number of data points to be visualized is
            reduced and is easier for the user to interpret. The figure below{' '}
            <a href="https://dl.acm.org/doi/10.1145/3371158.3371170">
              (Tanted et al., 2020)
            </a>{' '}
            illustrates an example of data visualization at different levels of
            granularity (minute, hour, day)
            <br /> <br />
            <img src={granular} alt="poster gif" className="vis-img" />
            <br /> <br />
            For the future research, data processing techniques like filtering,
            sampling and aggregation can be used in visualization systems to
            reduce the number of data points displayed. For the current{' '}
            <a href="/visualizer">Visualizer Interface</a>
            <br /> we have visualized samples of the Noise and Air Quality data
            collected by the sensors for the SONYC project.
          </p>
          <p className="full-text">- - -</p>
          <p className="full-text">
            Moreover, visualizing the longitudinal data such as Air Quality or
            Noise level data is challenging due to continuity of the data: 24
            hours form a continuous cycle as the 'day' has no precise start and
            end. A normal day ends at 11.59pm, but this line is subjective: if
            we want to show how data changes based on human activity during the
            night vs day (relevant to Noise Level analysis), the 'end' and
            'start' can be set differently. <br />
            <br />
            For example, some line or bar charts that deal with the 24-hour
            cycle set 'start' and 'end' at 4am as, generally, at this time most
            people are sleeping). Picking an arbitrary time to break the data
            might be an additional challenge as it requires preliminary analysis
            and knowledge about the data and potential insights it can provide.
            Learn more about continuity challenge{' '}
            <a href="http://dougmccune.com/blog/2011/04/21/visualizing-cyclical-time-hour-of-day-charts/">
              here.
            </a>
          </p>

          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Visualization Graphs and Discussion </h4>
          <p className="full-text">
            We researched and selected graphs that can most effectively
            visualize the longitudinal sensor data (both Air Quality and Noise
            level data). Some of these graphs have been already created and
            incorporated in the Visualizer interface, while other graphs can
            serve as an inspiration for future researchers at the SONYC lab.
          </p>
          <h5 className="gif-text-h5-dv">A. Line graph</h5>
          <p className="full-text">
            {' '}
            <br />- The easiest way to display the longitudinal data. Line
            Graphs are used to display quantitative values over a continuous
            interval or time period. A Line Graph is most frequently used to
            show trends and analyse how the data has changed over time.
            <br /> - Typically these charts begin at a certain hour (often
            midnight) and show 24 unique bars or data points, ending at the same
            time they started. <br />
            <br />
          </p>
          <div className="float-container">
            <div className="float-child">
              <p className="full-text">
                Advantages
                <br />
                - Useful for representing continuous data, such as change over
                time <br />
                - Allows possible extrapolation of data <br />
                - Having a line constructed from multiple data points can allow
                you to make estimates of missing data <br />- Allows comparison
                of two or more items to see if there is any kind of connection
                or relationship
              </p>
            </div>

            <div className="float-child">
              <p className="full-text">
                Disadvantages
                <br />
                - Can be difficult to determine exact values at a given point of
                the graph <br />- Too many lines, or even two lines that have
                values that are too similar, can make comparing data difficult
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <LazyImageProvider>
            <Carousel>
              {images.map((image, i) => (
                <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
              ))}
            </Carousel>
          </LazyImageProvider>
          <br />
          <h5 className="gif-text-h5-dv">B. Radar chart graph</h5>
          <p className="full-text">
            {' '}
            - Each variable is provided with an axis that starts from the
            centre. <br />
            - All axes are arranged radially, with equal distances between each
            other, while maintaining the same scale between all axes. <br />-
            Each variable value is plotted along its individual axis and all the
            variables in a dataset and connected together to form a polygon.
          </p>
          <div className="float-container">
            <div className="float-child">
              <p className="full-text">
                Advantages
                <br />
                - Useful for seeing which variables have similar values or if
                there are any outliers amongst each variable. <br />- Useful for
                seeing which variables are scoring high or low within a dataset,
                making them ideal for displaying performance.
              </p>
            </div>
            <div className="float-child">
              <p className="full-text">
                Disadvantages
                <br />
                - Having multiple polygons in one Radar Chart makes it hard to
                read. Too many variables creates too many axes and can also make
                the chart hard to read. Radar Charts should be kept simple and
                number of variables should be limited.
                <br />- Another flaw with Radar Charts is that they’re not so
                good for comparing values across each variable. Comparing values
                all on a single straight axis is much easier.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <LazyImageProvider>
            <Carousel>
              {imagesRc.map((image, i) => (
                <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
              ))}
            </Carousel>
          </LazyImageProvider>
          <br />
          <h5 className="gif-text-h5-dv">C. Nightingale chart graph</h5>
          <p className="full-text">
            {' '}
            - This chart was famously used by statistician and medical reformer,
            Florence Nightingale to communicate the avoidable deaths of soldiers
            during the Crimean war.
            <br />- Nightingale Rose Charts are drawn on a polar coordinate
            grid. Each category or interval in the data is divided into equal
            segments on this radial chart. How far each segment extends from the
            centre of the polar axis depends on the value it represents.
          </p>
          <div className="float-container">
            <div className="float-child">
              <p className="full-text">
                Advantages
                <br />- Each ring from the centre of the polar grid can be used
                as a scale to plot the segment size and represent a higher
                value. Therefore, it’s important to notice with Nightingale Rose
                Charts that it’s the area, rather than the radius of a segment
                that represents its value.
              </p>
            </div>
            <div className="float-child">
              <p className="full-text">
                Disadvantages
                <br />- The major flaw with Nightingale Rose Charts is that the
                outer segments are given more emphasis because of their larger
                area size. This disproportionately represents increases in
                value.
              </p>
            </div>
          </div>
          <br />
          <br />
          <LazyImageProvider>
            <Carousel>
              {imagesNg.map((image, i) => (
                <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
              ))}
            </Carousel>
          </LazyImageProvider>
          <br />
          <h5 className="gif-text-h5-dv">D. Double-time Bar chart</h5>
          <p className="full-text">
            {' '}
            <b>Why to not usual bar chart for time series? </b>
            <br /> <br />
            Generally, visualization of time series data using bar charts has
            the following challenges: <br />
            <br />
            <b>The break in the data between 11pm and midnight: </b>
            <br />
            <br />
            -To summarize, the first problem has to do with being able to
            understand the trends that occur around midnight (where this chart
            breaks the data). <br /> <br />
            -This is only problematic when something interesting is happening
            around midnight (or whenever you choose to have your chart
            begin/end). <br />
            <br />
            <b> The difficulty understanding the context of the time:</b> <br />
            <br />- The second point about context has to do with the fact that
            I don’t think about my days as starting at midnight and ending at
            11:59pm. <br />
            <br />- A more accurate representation of how I think of my days is
            that they start sometime when I wake up, usually around 7am, and
            they are broken up into “day-time” and “night-time”, and they end
            more or less when I go to sleep. <br />
            <br />
            <br />
            <b>Summary: </b>
            <br />
            <br />
            The simple bar chart doesn’t solve these problems well. It presents
            a hard break in the data, forcing the viewer to mentally connect the
            end of the chart with the beginning. And it also forces the viewer
            to think about the days in the context of midnight – 11pm, which is
            not the natural categorization system we have for the hours of the
            day. <br />
            Therefore, for future research and development, it is suggested to
            use a double-time bar chart to display the longitudinal sensor data.
          </p>
          <LazyImageProvider>
            <Carousel>
              {imagesBg.map((image, i) => (
                <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
              ))}
            </Carousel>
          </LazyImageProvider>
          <br />

          <br />
          <h5 className="gif-text-h5-dv">E. Bubble chart graph</h5>
          <p className="full-text">
            {' '}
            -Each point is assigned a label or category . Each plotted point
            then represents a third variable by the area of its circle. Colors
            can also be used to distinguish between categories or used to
            represent an additional data variable.
            <br /> -Time can be shown either by having it as a variable on one
            of the axis or by animating the data variables changing over time.
            <br />
            -Bubble Charts are typically used to compare and show the
            relationships between categorised circles, by the use of positioning
            and proportions. <br />- The overall picture of Bubble Charts can be
            used to analyse for patterns/correlations.
          </p>
          <div className="float-container">
            <div className="float-child">
              <p className="full-text">
                Advantages
                <br />
                -Bubble charts allowing to display three variables without using
                3D graphs. <br /> -Visually, size of the bubbles makes it very
                easy to make relative comparisons and graph can convey the same
                information as a line graph
              </p>
            </div>
            <div className="float-child">
              <p className="full-text">
                Disadvantages
                <br />- Too many bubbles can make the chart hard to read, so
                Bubble Charts have a limited data size capacity.
                <br />- Due to circle sizes, can be difficult to ascertain
                actual values; difficult to read and understand; cannot be used
                to display a lot of data.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <LazyImageProvider>
            <Carousel>
              {imagesBcg.map((image, i) => (
                <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
              ))}
            </Carousel>
          </LazyImageProvider>
        </div>
        <div className="block">
          <h4 className="gif-text">Web Accessibility Notes</h4>
          <p className="full-text">
            Another part of the Data Visualization Research involved researching
            Web Accessibility guidelines for web-based visualizations. This step
            is required for ensuring that current and future visualizations
            consider a diverse range of visual, physical and other abilities.
            <br />
            <br />
            According to the World Wide Web Consortium, accessibility is
            essential for developers and organizations that want to create
            high-quality websites and web tools, and not exclude people from
            using their products and services.
            <br />
            Below you can view a set of slides that include common advice on how
            to make web visualizations more accessible and accompanying visual
            examples. These slides are based on the{' '}
            <a href="https://www.betterment.com/resources/accessible-data-visualization/">
              Comprehensive Guide to Accessible Data Visualization
            </a>{' '}
            that reference the World Wide Web Consortium guidelines.
          </p>
          <LazyImageProvider>
            <Carousel>
              {imagesWa.map((image, i) => (
                <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
              ))}
            </Carousel>
          </LazyImageProvider>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DataVisualization
