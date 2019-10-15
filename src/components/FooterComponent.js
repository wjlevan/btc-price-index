import React, { Component } from 'react';
import './../css/FooterComponent.css';

export class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
                Powered by <a className="text" href="https://www.coindesk.com/price/bitcoin">CoinDesk</a>
                {/* Powered by CoinDesk */}

            </div>
        )
    }
}