import {Component} from 'react'
import jsondata from './jstest.json'
import InfowithBar from './InfowithBar'
import MarkSeriesPlot from './MarkSeriesPlot'
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, MarkSeries} from 'react-vis';
class TVData extends Component {

    render() {
 
      return (
        <div>
        <InfowithBar name={'TV'} hideInfo={true} colour={"blue"}/>
        <div className="chart">
          <h3>Mark Series Plot:</h3>
          <MarkSeriesPlot name={'TV'} colour={"blue"}/>
        </div>
        </div>
  
      );
    }
  }
  
  export default TVData;