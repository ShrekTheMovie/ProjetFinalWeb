import React, { Component } from 'react'

export default class Region extends Component {
    render() {
        const region = this.props.region;
        return (
            <li key={region}>
                {region}
            </li>
        )
    }
}
