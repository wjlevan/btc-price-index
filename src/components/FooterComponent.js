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
                Created by <a href="https://github.com/wjlevan" target="_blank">Walter Levan</a> | 
                Powered by <a className="text" href="https://www.coindesk.com/price/bitcoin" target="_blank">CoinDesk</a>
                {/* Powered by CoinDesk */}

            </div>
        )
    }
}