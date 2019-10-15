import React, { Component } from 'react';
import { getRequestBPI, getBPI, setSelection, changeDate } from '../functions/myFunctions';
import './../css/MainComponent.css';
import logo from './bitcoin.gif'

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
        let myData = getRequestBPI();
        let bpi;

        let x = setInterval(() => {
            if(!(myData === undefined)) {
                bpi = getBPI();
                console.log(bpi);
                clearInterval(x);
                let currency = bpi['bpi']['USD']['code'];

                let price = bpi['bpi']['USD']['rate_float'];
                price = Number(price.toFixed(2)).toLocaleString();


                let date = bpi['time']['updated'];
                date = changeDate(date);    // Change default UTC to PDT



                this.setState({
                    price: "Price: " + price + " " + currency,
                    date: "Last updated: " + date,
                    selection: "USD"
                })
            }}, 500)        
    }
    

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

                <input type="button" className="btn btn-usd" value="USD" onClick={this.HandleClick}></input>
                <input type="button" className="btn btn-gbp" value="GBP" onClick={this.HandleClick}></input>
                <input type="button" className="btn btn-eur" value="EUR" onClick={this.HandleClick}></input> <br /> <br />

                {this.state.price} <br /> <br />

                <div className="date">
                    {this.state.date}
                </div>

            </div>
        )  
    }
}