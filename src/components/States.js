import React from 'react';

export class States extends React.Component {

    render() {
        return (
            <div className="states">
                {(this.props.states.length > 0)
                    ? this.props.states.map((state, index) => {
                        return (
                            <div value={state.state} onClick={this.props.handleClick} key={index}>
                                {state.state}
                            </div>
                        )
                    })
                    : <li>Loading...</li>
}
            </div>
        )

    }
}