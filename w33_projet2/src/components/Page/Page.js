import React, { Component } from 'react'
import Provinces from '../Provinces/Provinces'
import Regions from '../Regions/Regions'

export default class Page extends Component {
    render() {
        return (
            <div class='row'>
                <Regions/>
                <Provinces/>
            </div>
        )
    }
}
