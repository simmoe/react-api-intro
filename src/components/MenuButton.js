import React from 'react';

export function MenuButton(props) {
    if (props.title !== '') {
        return (
            <button onClick={props.handleClick}>{props.title}</button>
        )
    } else {
        return (
            null
        )
    }
}