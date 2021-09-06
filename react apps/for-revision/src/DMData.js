import {Component} from 'react'
import InfowithBar from './InfowithBar'
import MarkSeriesPlot from './MarkSeriesPlot'

class DMData extends Component {

    render() {
      return (
        <div>
        <InfowithBar name={'DM'} hideInfo={true} colour={"yellow"}/>
        <div className="chart">
            <h3>Mark Series Plot:</h3>
            <MarkSeriesPlot name={'DM'} colour={"yellow"}/>
        </div>
        </div>
      );
    }
  }
  
  export default DMData;