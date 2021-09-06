import {Component} from 'react'
import jsondata from './jstest.json'
import InfowithBar from './InfowithBar'
import MarkSeriesPlot from './MarkSeriesPlot'

export default class AllData extends Component{
    render(){
 
        const Info = `The json file used for this analysis contains data on ${Object.keys(jsondata).length} various advertising forms. 
          These are ${Object.keys(jsondata)}.`
        return(
            <div>
                <h2>Combined data plots</h2>
                <p>(<b>Assumption:</b> We will continue on the assumption that the 52 data points in the array of each key in the json data corresponds to each week of a year.)
                <br/>{Info}</p>
                <div className="barCharts">
                    <InfowithBar name={'PPC'} colour={"green"}/>
                    <InfowithBar name={'TV'} colour={"blue"}/>
                    <InfowithBar name={'OOH'} colour={"red"}/>
                    <InfowithBar name={'DM'} colour={"yellow"}/>
                </div>
                <div className="MarkSeriesCharts">
                    <MarkSeriesPlot name={'PPC'} colour={"green"}/>
                    <MarkSeriesPlot name={'TV'} colour={"blue"}/>
                    <MarkSeriesPlot name={'OOH'} colour={"red"}/>
                    <MarkSeriesPlot name={'DM'} colour={"yellow"}/>
                </div>
            </div>
        )
    }
}