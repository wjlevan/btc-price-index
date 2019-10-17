import React, { Component } from 'react';
import { getRequestBPI, setSelection, changeDate } from '../functions/myFunctions';
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
    }



    componentDidMount() {

        // Make API request
        let myData = getRequestBPI();
    

        // Get data from API
        let x = setInterval(() => {

            // Run if API data has loaded
            if(!(myData === undefined)) {
                clearInterval(x);

                // Set default view to USD
                let currency = setSelection('USD')[0];

                let price = setSelection('USD')[1];
                price = Number(price.toFixed(2)).toLocaleString(); // Format to 2 decimals

                let date = setSelection('USD')[2];
                date = changeDate(date);    // Change default UTC to Local

                this.setState({
                    price: "Price: " + price + " " + currency,
                    date: "Last updated: " + date,
                    selection: "USD"
                })

                // Set mouse effects
                let hvr = document.getElementById("mybuttons");
                hvr.addEventListener("mouseover", event => {
                    event.target.style.color = "orange";
                });

                hvr.addEventListener("mouseout", event => {
                    event.target.style.color = "black";
                });    
                
            }}, 500)        
    }
    


    // Change currency on click
    HandleClick(event) {
        this.setState({
            selection: event.target.value});   
        let newData = setSelection(event.target.value);

        let currency = newData[0];
        
        let price = newData[1];
        price = Number(price.toFixed(2)).toLocaleString(); // Format to 2 decimals

        let date = newData[2];
        date = changeDate(date); // Change default UTC to Local 

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
                    <input type="button" className="btn btn-usd" value="USD" onClick={this.HandleClick}></input>
                    <input type="button" className="btn btn-gbp" value="GBP" onClick={this.HandleClick}></input>
                    <input type="button" className="btn btn-eur" value="EUR" onClick={this.HandleClick}></input> <br /> <br />
                </span>

                {this.state.price} <br /> <br />

                <div className="date">
                    {this.state.date}
                </div>

            </div>
        )  
    }
}