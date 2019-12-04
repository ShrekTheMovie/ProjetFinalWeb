import React, { Component } from 'react'

export default class Province extends Component {
    render() {
        const province = this.props.province;
        return (
            <li key={province}>
                {province}
            </li>
        )
    }
}