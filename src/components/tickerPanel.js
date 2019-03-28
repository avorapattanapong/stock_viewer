import React, {Component} from 'react';
import {Card, Input, Typography} from 'antd';
import StockPrice from "./stockPrice"
import StockDetails from "./stockDetails"

import "./tickerPanel.css";

const {Title} = Typography;

export default class TickerPanel extends Component {
    state = {
        inputState: true,
        inputText: "",
        symbol: ""
    };

    onInputChange = (e) => {
        this.setState({
            inputText: e.target.value
        });
    };

    onSubmitTicker = () => {
        this.setState({
            symbol: this.state.inputText,
            inputState: false
        })
    };

    onCancel = (e) => {
        this.setState({
            inputState: false
        })
    };

    onEdit = (e) => {
        this.setState({
            inputState: true
        })
    };

    render() {
        let title = <Input onChange={this.onInputChange} value={this.state.inputText} onPressEnter={this.onSubmitTicker}/>;
        let extra = <span className="inputControls"><a className="inputControlsBtn" onClick={this.onSubmitTicker} href="#">OK</a><a className="inputControlsBtn" onClick={this.onCancel} href="#">cancel</a></span>;
        if(!this.state.inputState) {
            title = <span onClick={this.onEdit}>{this.state.symbol}</span>;
            extra = <a href="#" onClick={this.onEdit}>change</a>
        }

        return (
            <Card
                title={title}
                extra={extra}
                style={{ width: 1000 }}
            >
                <StockDetails symbol={this.state.symbol}/>
                <StockPrice symbol={this.state.symbol}/>
            </Card>
        )
    }
}