import React, { Component } from 'react'
import "./Header.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="canada_flag" />
                    </div>
                    <div className="col-sm-8">
                        <h3>Projet final</h3>
                        <div>Outils de programmation Web</div>
                        <div>Cégep Gérald Godin</div>
                    </div>
                </div>
                <div class='row links'>
                    <Link to={'Regions'}>[Recherche par Régions]</Link>
                    <Link to={'Provinces'}>[Recherche par Provinces]</Link>
                    <Link to={'Page'}>[Recherche par régions et provinces(dépendant)]</Link>
                </div>
            </header>
        )
    }
}
