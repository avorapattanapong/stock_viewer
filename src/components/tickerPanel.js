import React, {Component} from 'react';
import {Card, Input, Typography} from 'antd';
import getCompanyInfo from "../api/stocks"
import StockPrice from "./stockDetails"
import StockDescription from "./stockDetails"

import "./tickerPanel.css";

const {Title} = Typography;

export default class TickerPanel extends Component {
    state = {
        inputState: true,
        inputText: "",
        ticker: "",
        price: " - ",
        description: " - ",
        isLoading: false
    };

    onInputChange = (e) => {
        this.setState({
            inputText: e.target.value
        });
        console.log(e);
    };

    onSubmitTicker = (e) => {
        this.setState({
            ticker: this.state.inputText,
            inputState: false,
            isLoading: true
        }, () => {
            getCompanyInfo(this.state.ticker, )
        })
    };

    submitSuccessFunc(data) {
        this.setState({

        })
    }

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
        let title = <Input onChange={this.onInputChange} />;
        let extra = <span className="inputControls"><a className="inputControlsBtn" onClick={this.onSubmitTicker} href="#">OK</a><a className="inputControlsBtn" onClick={this.onCancel} href="#">cancel</a></span>;
        if(!this.state.inputState) {
            title = <span onClick={this.onEdit}>{this.state.ticker}</span>;
            extra = <a href="#">X</a>
        }

        return (
            <Card
                title={title}
                extra={extra}
                style={{ width: 450 }}
            >
                <StockPrice isLoading={this.state.isLoading} price={this.state.price} currency={"USD"}/>
                <StockDescription isLoading={this.state.isLoading} descriptioin={this.state.description}/>
            </Card>
        )
    }
}