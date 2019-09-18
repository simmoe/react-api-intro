import React from 'react';
import {AirQualityColors} from './AirQualityColors';

export class City extends React.Component {

    returnStyles(airPol) {
        let bgCol;
        if (airPol <= 50) 
            bgCol = 'green';
        if (airPol > 50 && airPol <= 100) 
            bgCol = 'orange';
        if (airPol > 100 && airPol <= 150) 
            bgCol = 'yellow';
        if (airPol > 150 && airPol <= 200) 
            bgCol = 'red';
        return {
            backgroundColor: bgCol, 
            borderRadius: '50%', 
            padding: '16px', 
            fontSize: '50px', 
            color: 'white'
        }
    }
    render() {
            return (
            <div className='city'>
            {/* 
            For an explanation of the following technique, see
            https://hashnode.com/post/reactjs-how-to-render-components-only-after-successful-asynchronous-call-ciwvnkjr400sq7t533lvrpdtw */}
            <h1>Air pollution index</h1>
            { Object.getOwnPropertyNames(this.props.cityData).length > 0 &&
                <div>
                    <span style={this.returnStyles(this.props.cityData.current.pollution.aqicn)}>
                        {this.props.cityData.current.pollution.aqicn}
                    </span>
                </div>
            }
            <AirQualityColors/>
            </div>
        )
    }
}