import React from 'react';

export class Countries extends React.Component {

    render() {
        return (
            <div className="countries">
                {(this.props.countries.length > 0)
                    ? this.props.countries.map((country, index) => {
                        return (
                            <div value={country.country} onClick={this.props.handleClick} key={index}>
                                {country.country}
                            </div>
                        )
                    })
                    : <li>Loading...</li>
}
            </div>
        )

    }
}