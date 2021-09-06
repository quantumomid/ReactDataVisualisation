import {Component} from 'react'
import jsondata from './jstest.json'
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel, MarkSeries} from 'react-vis';

export default class MarkSeriesPlot extends Component {
    render() {
        const { name, colour } = this.props
        const data = jsondata[name].map((value, index) => {
            return {x: index, y: value, size: value}
        })
        return(
            <XYPlot margin={{left: 100}} height={400} width={400} color={colour}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <MarkSeries data={data} />
                <XAxis />
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
                <YAxis/>
                <ChartLabel
                text="Week"
                className="alt-x-label"
                includeMargin={false}
                xPercent={0.5}
                yPercent={1.12}
                />            
            </XYPlot>
        )
    }
}
