import React, { Component } from 'react';
import  './../css/NavComponent-Stylesheet.css';

export class NavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="grid-container">
                <div className="grid-left">

                </div>
                <div className="grid-center">
                    Bitcoin Price Index

                </div>
                <div className="grid-right">
                    
                </div>
            </div>
        )
    }
}