import React, { Component } from 'react'
import Provinces from '../Provinces/Provinces'
import Province from '../Province/Province'
import Regions from '../Regions/Regions'
import Region from '../Region/Region'

export default class Page extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
             //provinces: ['Alberta', 'Colombie-Britannique', 'Ile-du-Prince-Édouard', 'Manitoba', 'Nouveau-Brunswick', 'Nouvelle-Écosse', 'Ontario', 'Québec', 'Saskatchewan', 'Terre-Neuve-et-Labrador', 'Nunavut', 'Territoires du Nord\'Ouest', 'Yukon'],
             regions: [],
             provinces: [],
             strFiltre: ''
        }


    }
    
    handleChange = (event) => {
        this.setState({ strFiltre: event.target.value });
    }

    componentDidMount() {
        fetch('http://localhost:3050/regions')
        .then(function(res) {
            return res.json();
        }).then((jsonData)=> {
            console.log("Les régions du Canada: " + JSON.stringify(jsonData))

            this.setState({
            regions: jsonData.regions
            })
        });
    }

    componentDidMountProvinces = ()=> {
        const selectedRegion = document.getElementById('ddlRegions').value;
        fetch('http://localhost:3050/regions_provinces/' + selectedRegion)
         .then(function(res) {
             return res.json();
         }).then((jsonData)=> {
             console.log("Les provinces de " + selectedRegion + ' :' + JSON.stringify(jsonData))

             this.setState({
                provinces: jsonData
             })
        });
    }
    render() {
        console.log("Régions: " + this.state.regions)
        return (
            <div>
                {/* <span>Provinces contenant les lettres:&nbsp;&nbsp;</span>
                <input
                    id="filtreId"
                    type="text"
                    value={this.state.strFiltre}
                    onChange={this.handleChange}
                />
                <ul> {this.state.strFiltre} </ul> */}
                <ul>
                    <select id='ddlRegions' onChange={this.componentDidMountProvinces}>
                        <option>Choisir votre région</option>
                        {this.state.regions.map(currRegion => {
                            return (
                                <Region region={currRegion} />
                            );
                        })}
                    </select>
                </ul>
                <ul>
                    <select>
                        <option>Choisir votre province</option>
                        {this.state.provinces.map(currProvince =>{
                            return (
                                <Province province={currProvince} />
                            )
                        })}
                    </select>
                </ul>
            </div>
        )
    }
}
