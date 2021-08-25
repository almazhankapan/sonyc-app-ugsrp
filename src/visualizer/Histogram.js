import React from 'react'
import Plot from 'react-plotly.js'

const Histogram = ({ data, xAxisAttribute, title }) => {
  console.log(data)
  let layout = {
    autosize: true,
    title: title || 'Untitled',
    xaxis: { title: xAxisAttribute },
    yaxis: { title: 'Count' },
  }

  let xData = data.map((d) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === 'NULL') {
      return ''
    }
    return d[xAxisAttribute]
  })
  console.log(data)
  console.log(xData)

  return (
    <Plot
      className=""
      data={[
        {
          x: xData,
          type: 'histogram',
          marker: {
            color: 'rgba(210, 106, 89, 0.7)',
            line: {
              color: 'rgba(225, 50, 102, 1)',
              width: 1,
            },
          },
          histnorm: 'count',
        },
      ]}
      layout={layout}
    />
  )
}

export default Histogram
