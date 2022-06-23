import React, {useEffect, useState} from 'react'
import {ResponsiveContainer, CartesianGrid, XAxis, LineChart, YAxis, Tooltip, Legend, Line} from 'recharts'

const generateLineData = (data) => {
    if (data === null) {
        data = []
    }
    let lastValue = null
    if (data.length === 0) {
        for (let i = 0; i < 31; i++) {
            let obj = {}
            if (lastValue === null){
                lastValue = 30
            }
            obj.temperature = lastValue + Math.floor(Math.random()*5-2.5)
            data.push(obj)
        }
    } else {
        data.splice(0, 1)
        let obj = {}
        lastValue = data[29].temperature
        obj.temperature = lastValue + Math.floor(Math.random()*5-2.5)
        data.push(obj)
        console.log("update", data)
    }
    return data
}
export const theme = {
    tickText: '#036742',
    gridStroke: '#0da96e',
    lineStroke: '#ff8b00',
    dotFill: '#0da96e',
    dotStroke: '#036742',
    legendColor: '#036742'
}

export class CustomizedAxisTick extends React.Component {
    render() {
        const {x, y, stroke, payload} = this.props;
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fontSize={12} fill={theme.tickText}>{payload.value}</text>
            </g>
        );
    }
}
// const LineGraph = ({}) => {
//     const [time, setTime] = useState(new Date())
//
//     useEffect(() => {
//         setInterval(() => {
//             console.log(time)
//             setTime(new Date())
//         }, 1000);
//     }, []);
//
//     return(
//         <div>
//             <h1>{`
//                 ${time.getHours()} :
//                 ${time.getMinutes()} :
//                 ${time.getUTCSeconds()} :
//                 ${time.getDate()}
//             `}</h1>
//         </div>
//     )
// }
const LineGraph = () => {
    const [data, setData] = useState(generateLineData([]))
    const [key, setKey] = useState(0)
    useEffect(() => {
        const interval = setInterval(
            () => {
                let newData = generateLineData(data)
                setKey(Math.random())
                setData(newData)
            },
            3000
        );
        return () => clearInterval(interval)
    }, [data])
    return (
        <ResponsiveContainer>
            <LineChart data={data} key={key}
                       margin={{top: 0, right: 40, left: 0, bottom: 0}}
            >
                <CartesianGrid stroke={theme.gridStroke}/>
                <XAxis
                    dataKey="name" padding={{left: 30, right: 30}} tick={<CustomizedAxisTick/>}/>
                <YAxis
                    domain={['dataMin-5', 'dataMax+10']} tick={<CustomizedAxisTick/>}/>
                <Tooltip
                    wrapperStyle={{backgroundColor: '#0da96e', fontSize: 12}}/>
                <Legend
                    wrapperStyle={{color: theme.legendColor, fontSize: 12}}
                    layout={'vertical'} verticalAlign={'top'}
                    height={36}/>
                <Line
                    type="linear"
                    dataKey="temperature"
                    stroke={theme.lineStroke}
                    isAnimationActive={false}
                    dot={{stroke: theme.dotStroke, strokeWidth: 1, fill: theme.dotFill}}
                    activeDot/>
            </LineChart>
        </ResponsiveContainer>
    )
}

// class LineGraph extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }
//
//     static getDerivedStateFromProps(props) {
//         return {data: props.lineData}
//     }
//
//     componentDidMount() {
//         setInterval(
//             () => {
//                 let newData = generateLineData(this.state.data)
//                 this.setState({data: newData})
//             },
//             1000
//         );
//     }
//
//
//     render() {
//         return (
//             <ResponsiveContainer>
//                 <LineChart data={this.state.data}
//                            margin={{top: 0, right: 40, left: 0, bottom: 0}}
//                 >
//                     <CartesianGrid stroke={theme.gridStroke}/>
//                     <XAxis
//                         dataKey="name" padding={{left: 30, right: 30}} tick={<CustomizedAxisTick/>}/>
//                     <YAxis
//                         domain={['dataMin-5', 'dataMax+10']} tick={<CustomizedAxisTick/>}/>
//                     <Tooltip
//                         wrapperStyle={{backgroundColor: '#0da96e', fontSize: 12}}/>
//                     <Legend
//                         wrapperStyle={{color: theme.legendColor, fontSize: 12}}
//                         layout={'vertical'} verticalAlign={'top'}
//                         height={36}/>
//                     <Line
//                         type="linear"
//                         dataKey="temperature"
//                         stroke={theme.lineStroke}
//                         dot={{stroke: theme.dotStroke, strokeWidth: 1, fill: theme.dotFill}}
//                         activeDot/>
//                 </LineChart>
//             </ResponsiveContainer>
//         )
//
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         lineData: state.line.lineData
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateData: (type, data) => dispatch(updateData(type, data))
//     };
// };

export default LineGraph