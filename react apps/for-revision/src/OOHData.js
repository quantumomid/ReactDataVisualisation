import {Component} from 'react'
import InfowithBar from './InfowithBar'
import MarkSeriesPlot from './MarkSeriesPlot'
class OOHData extends Component {

    render() {

      return (
        <div>
            <InfowithBar name={'OOH'} hideInfo={true} colour={"red"}/>
            <div className="chart">
                <h3>Mark Series Plot:</h3>
                <MarkSeriesPlot name={'OOH'} colour={"red"}/>
            </div>
        </div>
      )
    }
  }
  
  export default OOHData;