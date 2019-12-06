import React, { Component } from 'react'
import Region from '../Region/Region'

export default class Provinces extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
             //provinces: ['Alberta', 'Colombie-Britannique', 'Ile-du-Prince-Édouard', 'Manitoba', 'Nouveau-Brunswick', 'Nouvelle-Écosse', 'Ontario', 'Québec', 'Saskatchewan', 'Terre-Neuve-et-Labrador', 'Nunavut', 'Territoires du Nord\'Ouest', 'Yukon'],
             regions: [],
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
             console.log("Les régions du Canada: " + jsonData.regions)
             this.setState({
                regions: jsonData.regions
             })
         });
     }

    render() {
        console.log("Régions: " + this.state.regions)
        let binProvincesFound = this.state.regions.some(
            region=>region
                .toUpperCase()
                .includes(this.state.strFiltre.toUpperCase())
            ) 
        
        return (
            <div>
                <span>Provinces contenant les lettres:&nbsp;&nbsp;</span>
                <input
                    id="filtreId"
                    type="text"
                    value={this.state.strFiltre}
                    onChange={this.handleChange}
                />
                <ul> {this.state.strFiltre} </ul>
                <ul>
                    <select>
                        <option>Choisir votre région</option>
                        {this.state.regions.map(currRegion => {
                            return (
                                <div>
                                    <option><Region region={currRegion} /></option>
                                </div>
                            );
                        })}
                    </select>
                    {!binProvincesFound && <li> No states found </li>}                    
                </ul>
            </div>
            
        )
    }
}

