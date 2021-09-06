import {Component} from 'react'
import InfowithBar from './InfowithBar'
import MarkSeriesPlot from './MarkSeriesPlot'

class PPCData extends Component {
    render() {
      return (
        <div className="charts-container">
            <InfowithBar name={'PPC'} hideInfo={true} colour={"green"}/>
            <div className="chart">
                <h3>Mark Series Plot:</h3>
                <MarkSeriesPlot name={'PPC'} colour={"green"}/>
            </div>
        </div>
      );
    }
  }
  
  export default PPCData;
  