import React from 'react'
import {RadialBarChart, ResponsiveContainer, RadialBar, Tooltip, Legend, LineChart} from 'recharts'
import {theme} from "./LineChart";
import {updateData} from "../../actions/action-dispatcher";
import {connect} from 'react-redux'


const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
    background: 'white',
};

class Spiral extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }


    static getDerivedStateFromProps(props) {
        return {data: props.spiralData}
    }

    componentDidMount() {
        this.props.updateData('spiral')
    }

    render () {
        return (
            <ResponsiveContainer>
                <RadialBarChart data={this.state.data}>
                    <Tooltip
                        wrapperStyle={{backgroundColor:'#000', fontSize:18}}/>
                    <Legend
                        wrapperStyle={{color:theme.legendColor, fontSize:12}}
                        layout={'horizontal'} verticalAlign={'top'}
                        height={50}/>
                    <RadialBar minAngle={70} background={{fill:style.background}} clockWise={true} dataKey='value'/>
                </RadialBarChart>
            </ResponsiveContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spiralData: state.spiral.spiralData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (type) => dispatch(updateData(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spiral)