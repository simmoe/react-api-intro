import React from 'react';

export class Cities extends React.Component {

    render() {
        return (
            <div className="cities">
                {(this.props.cities.length > 0)
                    ? this.props.cities.map((city, index) => {
                        return (
                            <div value={city.city} onClick={this.props.handleClick} key={index}>
                                {city.city}
                            </div>
                        )
                    })
                    : <li>Loading...</li>
}
            </div>
        )

    }
}