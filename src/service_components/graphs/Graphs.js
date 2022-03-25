import React from 'react';
import GridLayout from 'react-grid-layout';
import LineChart from './LineChart';
import '../../assets/css/dashboard.css';
import MyTextEdit from "../styled_components/MyTextEdit";
import styled from "styled-components";
import Bar from "./Bar";
import Spiral from "./Spiral";
import {MyHeading} from "../styled_components/MyHeading";
import {MyParagraph} from "../styled_components/MyParagraph";
import MyPromo from "../styled_components/MyPromo";

const charts = [
    {
        key: 'lineChart',
        dataGrid: {x: 4, y: 0, w: 7, h: 7},
        graph: <LineChart/>,
        heading: 'График температуры датчика #12bu383'

    },
    {
        key: 'spiral',
        dataGrid: {x: 0, y: 0, w: 4, h: 7},
        graph: <Spiral/>,
        static: true,
        heading: 'Текущее значение температуры'
    },
    /*
    {
        key: 'stats',
        dataGrid: {x: 0, y: 1, w: 12, h: 11},
        graph: <Bar/>,
        heading: 'Bar Chart'

    }
    */
]

export const Box = styled.div`
  backgroundColor: #0da96e;
`

export const Graph = styled.div`
  overflow: auto;
  width: 100%;
  height: 100vh;
`


class Graphs extends React.Component {


    renderCharts() {
        return charts.map(chart => {
            let promo = <></>;
            if (chart.key === 'spiral'){
                promo = <div className={'heading'}>
                    <div className={'dragMe'}/>
                    <MyPromo></MyPromo>
                </div>
            }
            else{
                promo = <div className={'heading'}>
                    <div className={'dragMe'}/>
                    <MyTextEdit i={chart.key} defaultValue={chart.heading}/>
                </div>
            }

                return (
                    <Box key={chart.key} data-grid={{...chart.dataGrid}} >
                        {promo}
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