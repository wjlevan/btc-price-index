import React, { Component } from 'react';
import  './../css/TitleComponent.css';
import linkedin from './../assets/linkedin.jpg';
import github from './../assets/github.png';

export class TitleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="grid-container">



                <span id="grid-first">
                    Bitcoin Price Index
                </span>


                <span id="grid-second">
                    <a href="https://github.com/wjlevan/btc-price-index" target="_blank">
                        <img id="github" src={github} alt="source code"></img>
                    </a>


                    <a href="https://www.linkedin.com/in/walterlevan/" target="_blank">
                        <img id="linkedin" src={linkedin}  alt="linkedin"></img>
                    </a>
                </span>    


            </div>
        )
    }
}