import React from 'react';
import {AirQualityColors} from './AirQualityColors';

export class City extends React.Component {

    render() {
        console.log(this.props.cityData);
        const airPol = this.props.cityData.current.pollution.aqicn;
        let bgCol = "";
        if(airPol <= 50) bgCol = 'green';
        if(airPol > 50 && airPol <= 100) bgCol = 'orange';
        if(airPol > 100 && airPol <= 150) bgCol = 'yellow';
        if(airPol > 150 && airPol <= 200) bgCol = 'red';
        const styles = {
            backgroundColor: bgCol,
            borderRadius: '50%',
            padding:'16px',
            fontSize: '50px',
            color: 'white',
          }

        return (
            <div className="city">
                <h2>Air quality index</h2>
                <p>
                    <span style={styles}>{airPol}</span>
                </p>
                <AirQualityColors />
            </div>
        )
    }
}
