import React from 'react'
//Important! Below the mock data is imported from the utils folder
import { dataNQ } from '../utils/DataNq.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Histogram from './Histogram'
import BarChart from './BarChart'
import BoxPlot from './BoxPlot'
import AreaChart from './AreaChart'
import LineGraph from './LineGraph'
import ScatterPlot from './ScatterPlot'
import './Visualizer.css'

import { useState } from 'react'

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function VisualizerNQ() {
  const dataKeysNq = Object.keys(dataNQ[0])
  const [histoXAttr, setHistoXAttr] = useState('ID')

  //scatter plot attributes
  const [ScatoXAttr, setScatoXAttr] = useState('ID')
  const [ScatoYAttr, setScatoYAttr] = useState('ID')

  //box plot attributes
  const [boxPlotXAttr, setBoxPlotXAttr] = useState('ID')
  const [boxPlotYAttr, setBoxPlotYAttr] = useState('Time')

  //line graph attributes
  const [lineGraphXAttr, setlineGraphXAttr] = useState('ID')
  const [lineGraphYAttr, setlineGraphYAttr] = useState('ID')

  //bar chart attributes
  const [barChartXAttr, setBarChartXAttr] = useState('ID')
  const [barChartYAttr, setBarChartYAttr] = useState('ID')

  //area chart attributes
  const [areaChartXAttr, setAreaChartXAttr] = useState('ID')
  const [areaChartYAttr, setAreaChartYAttr] = useState('ID')

  //Below is the html code (return value)
  return (
    <>
      <Header />
      <div className="home-graphs">
        <h2 className="header-text-graphs">SONYC Visualizer App</h2>
        <div className="graph-wrapper">
          <div className="graph-block-nq">
            <Histogram
              data={dataNQ}
              xAxisAttribute={histoXAttr}
              title={`Histogram Distribution of Noise Level data`}
            ></Histogram>
            <br />
            <br />
            <div>Select variable for the X-axis: </div>
            <br />

            <select onChange={(e) => setHistoXAttr(e.target.value)}>
              {dataKeysNq.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className="graph-block-nq">
            <ScatterPlot
              data={dataNQ}
              xAxisAttribute={ScatoXAttr}
              yAxisAttribute={ScatoYAttr}
              title={'Scatter Plot of Noise Level Data'}
            ></ScatterPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <br />
                <div>Select variable for the X-axis: </div> <br />
                <div>
                  <select onChange={(e) => setScatoXAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                {' '}
                <br />
                <div>Select variable for the Y-axis: </div> <br />
                <div>
                  <select onChange={(e) => setScatoYAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block-nq">
            <BoxPlot
              data={dataNQ}
              xAxisAttribute={boxPlotXAttr}
              yAxisAttribute={boxPlotYAttr}
              title={'Box Plot of Noise Level Data'}
            ></BoxPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                {' '}
                <br />
                <div>Select variable for the X-axis: </div> <br />
                <div>
                  <select onChange={(e) => setBoxPlotXAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                {' '}
                <br />
                <div>Select variable for the Y-axis: </div> <br />
                <div>
                  <select onChange={(e) => setBoxPlotYAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block-nq">
            <LineGraph
              data={dataNQ}
              xAxisAttribute={lineGraphXAttr}
              yAxisAttribute={lineGraphYAttr}
              title={'Line Graph Distribution of Noise Level Data'}
            ></LineGraph>
            <div className="wrap-axis">
              <div className="x-axis">
                {' '}
                <br />
                <div>Select variable for the X-axis: </div> <br />
                <div>
                  <select onChange={(e) => setlineGraphXAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                {' '}
                <br />
                <div>Select variable for the Y-axis: </div> <br />
                <div>
                  <select onChange={(e) => setlineGraphYAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block-nq">
            <BarChart
              data={dataNQ}
              xAxisAttribute={barChartXAttr}
              yAxisAttribute={barChartYAttr}
              title={'Bar Chart of Noise Level Data'}
            ></BarChart>
            <div className="wrap-axis">
              <div className="x-axis">
                {' '}
                <br />
                <div>Select variable for the X-axis: </div> <br />
                <div>
                  <select onChange={(e) => setBarChartXAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                {' '}
                <br />
                <div>Select variable for the Y-axis: </div> <br />
                <div>
                  <select onChange={(e) => setBarChartYAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block-nq">
            <AreaChart
              data={dataNQ}
              xAxisAttribute={areaChartXAttr}
              yAxisAttribute={areaChartYAttr}
              title={'Area Chart of Noise Level Data'}
            ></AreaChart>
            <div className="wrap-axis">
              <div className="x-axis">
                {' '}
                <br />
                <div>Select variable for the X-axis: </div> <br />
                <div>
                  <select onChange={(e) => setAreaChartXAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                {' '}
                <br />
                <div>Select variable for the Y-axis: </div> <br />
                <div>
                  <select onChange={(e) => setAreaChartYAttr(e.target.value)}>
                    {dataKeysNq.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default VisualizerNQ
