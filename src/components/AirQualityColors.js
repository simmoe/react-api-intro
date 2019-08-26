import React from 'react';
import './AirQualityColors.css';

export const AirQualityColors = () => (
    <div className="airQualityCircles">
        <div>
            <span className='good'></span>Good
        </div>
        <div>
            <span className='moderate'></span>Moderate
        </div>
        <div>
            <span className='unhealthySensitive'></span>Unhealthy for sensitive groups
        </div>
        <div>
            <span className='unhealthy'></span>Unhealthy
        </div>
    </div>
)