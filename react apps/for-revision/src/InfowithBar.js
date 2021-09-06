import {Component} from 'react'
import jsondata from './jstest.json'
import {XYPlot, ChartLabel, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries} from 'react-vis';
import * as d3 from 'd3'

class InfowithBar extends Component {
    
    render() {
        // console.log(jsondata)
        const { name, hideInfo, colour } = this.props
        const data = jsondata[name].map((value, index) => {
            return {x: index, y: value}
        })
        //   console.log(ppcData)
        const mean = data.reduce((acc, currObj)=> acc+currObj.y, 0)/data.length
        const max = Math.max.apply(Math, data.map(function(o) { return o.y; }))
        const min = Math.min.apply(Math, data.map(function(o) { return o.y; }))
        const text = `Here we will look into the ${name} data specifically. First lets look at some of the basic statistical info on the ${name} data.
        The mean of the ${name} data is ${Math.floor(mean)}. The maximum and minimum values of the ${name} data are ${max} and ${min} respectively.`
        //   console.log(Object.values(ppcData))
        
        return (
            <div className="charts-container">
            <h2>{name}</h2>
            {hideInfo && <p>{text}</p>}
            <div className="chart">
            {hideInfo && <h3>Bar Chart:</h3>}
            <XYPlot margin={{left: 100}} height={400} width={400} color={colour}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <YAxis />
            <ChartLabel
            text="Number"
            includeMargin={false}
            xPercent={-0.19}
            yPercent={0.5}
            style={{
                transform: 'rotate(-90)',
                textAnchor: 'end'
            }}
            />
            <XAxis/>
            <ChartLabel
            text="Week"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.5}
            yPercent={1.12}
            />
            <VerticalBarSeries data={data}/>
            </XYPlot>
            </div>
            </div>
            );
        }
    }
    
    export default InfowithBar;
    