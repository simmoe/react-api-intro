import React from 'react';

export function AirQualityStyle(){    
    const val = this.props.val
    let bgCol = "";
    if(val <= 50) bgCol = 'green';
    if(val > 50 && airPol <= 100) bgCol = 'orange';
    if(val > 100 && airPol <= 150) bgCol = 'yellow';
    if(val > 150 && airPol <= 200) bgCol = 'red';

    return(bgCol)
}