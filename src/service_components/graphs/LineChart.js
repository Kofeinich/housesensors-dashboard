import React from 'react'
import {ResponsiveContainer, CartesianGrid, XAxis, LineChart, YAxis, Tooltip, Legend, Line} from 'recharts'
import lineData from '../../data/data-line'
import {updateData} from "../../actions/action-dispatcher";
import connect from "react-redux/es/connect/connect";

export const theme = {
    tickText: '#036742',
    gridStroke: '#0da96e',
    lineStroke: '#ff8b00',
    dotFill: '#0da96e',
    dotStroke: '#036742',
    legendColor: '#036742'
}

export class CustomizedAxisTick extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        const {x, y, stroke, payload} = this.props;
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fontSize={12} fill={theme.tickText}>{payload.value}</text>
            </g>
        );
    }
};


class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    static getDerivedStateFromProps(props) {
        return {data: props.lineData}
    }

    componentDidMount() {
        this.props.updateData('line')
    }

    render() {
        return (
            <ResponsiveContainer>
                <LineChart data={this.state.data}
                           margin={{ top: 0, right: 40, left:0, bottom:0 }}
                >
                    <CartesianGrid stroke={theme.gridStroke}/>
                    <XAxis
                        dataKey="name" padding={{left: 30, right: 30}} tick={<CustomizedAxisTick/>}/>
                    <YAxis
                        domain={['dataMin-5', 'dataMax+10']} tick={<CustomizedAxisTick/>}/>
                    <Tooltip
                        wrapperStyle={{backgroundColor:'#0da96e', fontSize:12}}/>
                    <Legend
                        wrapperStyle={{color:theme.legendColor, fontSize:12}}
                        layout={'vertical'} verticalAlign={'top'}
                        height={36}/>
                    <Line
                        type="linear"
                        dataKey="temperature"
                        stroke={theme.lineStroke}
                        dot={{ stroke: theme.dotStroke, strokeWidth: 1, fill:theme.dotFill}}
                        activeDot/>
                </LineChart>
            </ResponsiveContainer>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        lineData: state.line.lineData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (type) => dispatch(updateData(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph)