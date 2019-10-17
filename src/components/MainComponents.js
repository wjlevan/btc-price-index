import React, { Component } from 'react';
import { getRequestBPI, getBPI, setSelection } from './../functions/myFunctions';
import './../css/MainComponent.css';


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
                let date = bpi['time']['updated'];
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
        let date = newData[2];
        this.setState({
            price: "Price: " + price + " " + currency,
            date: date
        })
     }
        

    render() {
        return (
            <div className="container">
                <input type="button" className="btn btn-usd" value="USD" onClick={this.HandleClick}></input>
                <input type="button" className="btn btn-gbp" value="GBP" onClick={this.HandleClick}></input>
                <input type="button" className="btn btn-eur" value="EUR" onClick={this.HandleClick}></input> <br />
                {this.state.price} <br />
                {this.state.date}
            </div>
        )  
    }
}