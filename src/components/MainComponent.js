import React, { Component } from 'react';
import { getRequestBPI, getBPI, setSelection, changeDate } from '../functions/myFunctions';
import './../css/MainComponent.css';
import logo from './../assets/bitcoin.gif'



export class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "",
            price: "",
            date: "",
            selection: ""
        }

        this.HandleClick = this.HandleClick.bind(this);
        this.mouseHover = this.mouseHover.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    }

    componentDidMount() {

        // Make API request
        let myData = getRequestBPI();
    

        // Get data from API
        let x = setInterval(() => {

            // Run if data has loaded
            if(!(myData === undefined)) {
                let bpi = getBPI();
                clearInterval(x);

                console.log(setSelection('USD'));
                let currency = bpi['bpi']['USD']['code'];

                let price = bpi['bpi']['USD']['rate_float'];
                price = Number(price.toFixed(2)).toLocaleString();

                let date = bpi['time']['updated'];
                date = changeDate(date);    // Change default UTC to Local Time

                // Default view on mount
                this.setState({
                    price: "Price: " + price + " " + currency,
                    date: "Last updated: " + date,
                    selection: "USD"
                })
            }}, 500)        
    }
    
    mouseHover() {
        let hvr2 = document.getElementById("mybuttons");
        hvr2.addEventListener("mouseover", event => {
            event.target.style.color = "orange";
        });
    }

    mouseLeave() {
        let hvr = document.getElementById("mybuttons");
        hvr.addEventListener("mouseout", event => {
            event.target.style.color = "black";
        });        
    }

    // Change currency on click
    HandleClick(event) {
        this.setState({
            selection: event.target.value});   
        let newData = setSelection(event.target.value);
        let currency = newData[0];
        let price = newData[1];
        price = Number(price.toFixed(2)).toLocaleString();

        let date = newData[2];
        date = changeDate(date);

        this.setState({
            price: "Price: " + price + " " + currency,
            date: "Last updated: " + date
        })
    }
        



    render() {
        return (
            <div className="container">
                <img src={logo} alt="bitcoin-logo" height="10%" width="10%"/> <br/> <br/>                

                <span id="mybuttons">
                    <input type="button" className="btn btn-usd" value="USD" onClick={this.HandleClick} onMouseOver={this.mouseHover} onMouseOut={this.mouseLeave}></input>
                    <input type="button" className="btn btn-gbp" value="GBP" onClick={this.HandleClick} onMouseOver={this.mouseHover} onMouseLeave={this.mouseLeave}></input>
                    <input type="button" className="btn btn-eur" value="EUR" onClick={this.HandleClick} onMouseOver={this.mouseHover} onMouseLeave={this.mouseLeave}></input> <br /> <br />
                </span>

                {this.state.price} <br /> <br />

                <div className="date">
                    {this.state.date}
                </div>

            </div>
        )  
    }
}