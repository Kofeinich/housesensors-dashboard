import React from 'react';
import GridLayout from 'react-grid-layout';
import LineChart from './LineChart';
import '../../assets/css/dashboard.css';
import MyTextEdit from "../styled_components/MyTextEdit";
import styled from "styled-components";
import Bar from "./Bar";

const charts = [
    {
        key: 'lineChart',
        dataGrid: {x: 3, y: 0, w: 9, h: 9},
        graph: <LineChart/>,
        heading: 'Line Chart'

    },
    {
        key: 'stats',
        dataGrid: {x: 0, y: 1, w: 12, h: 11},
        graph: <Bar/>,
        heading: 'Bar Chart'

    }
]

export const Box = styled.div`
  backgroundColor: #0da96e;
  boxShadow: rgba(0, 0, 0, 0.28) 0px 0px 5px;
`

export const Graph = styled.div`
  overflow: auto;
  width: 100%;
  height: 100vh;
`


class Graphs extends React.Component {
    renderCharts() {
        return charts.map(chart => {
                return (
                    <Box key={chart.key} data-grid={{...chart.dataGrid}} >
                        <div className={'heading'}>
                            <div className={'dragMe'}/>
                            <MyTextEdit i={chart.key} defaultValue={chart.heading}/>
                        </div>
                        {chart.graph}
                    </Box>
                )
            }
        )
    }

    render() {
        return (
            <Graph>
                <GridLayout rowHeight={30} width={1200} verticalCompact={true} compactType={'vertical'}
                            draggableHandle=".dragMe">
                    {this.renderCharts()}
                </GridLayout>
            </Graph>
        )
    }
}

export default Graphs