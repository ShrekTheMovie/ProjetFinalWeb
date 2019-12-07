import React, { Component } from 'react'

export default class Province extends Component {
    render() {
        const province = this.props.province;
        return (
            <option key={province} id='option'>
                {province}
            </option>
        )
    }
}