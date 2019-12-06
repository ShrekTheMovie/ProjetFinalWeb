import React, { Component } from 'react'
import Province from '../Province/Province'

export default class Provinces extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
             //provinces: ['Alberta', 'Colombie-Britannique', 'Ile-du-Prince-Édouard', 'Manitoba', 'Nouveau-Brunswick', 'Nouvelle-Écosse', 'Ontario', 'Québec', 'Saskatchewan', 'Terre-Neuve-et-Labrador', 'Nunavut', 'Territoires du Nord\'Ouest', 'Yukon'],
             provinces: [],
             strFiltre: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({ strFiltre: event.target.value });
    }

    componentDidMount() {
        fetch('http://localhost:3050/provinces')
         .then(function(res) {
             return res.json();
         }).then((jsonData)=> {
             console.log("Les provinces du Canada: " + jsonData.provinces)
             this.setState({
                provinces: jsonData.provinces
             })
         });
     }

    render() {
        console.log("Provinces: " + this.state.provinces)
        let binProvincesFound = this.state.provinces.some(
            province=>province
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
                    <select id="provinces">
                        <option>Choisir votre province</option>
                        {this.state.provinces.map(currProvince => {
                            return (
                                <div>
                                    <option><Province province={currProvince}/></option>
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
