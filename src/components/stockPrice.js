import React, {Component}  from 'react';
import {Statistic, Skeleton, Row, Col} from "antd"
import {getStockPrice} from "../api/stocks";

const currency = "USD";
export default class StockPrice extends Component {
    state = {
        price: 0,
        isLoading: false,
        errorMessage: ""
    };


    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.setState({
                isLoading: true
            }, () => {
                getStockPrice(this.props.symbol,this.submitSuccessFunc,this.submitFailureFunc,this.submitAlwaysFunc);
            })

        }
    }

    submitSuccessFunc = (data) => {
        console.log(data)
        this.setState({
            price: data.price

        })
    };

    submitFailureFunc = (data) => {
        this.setState({
            errorMessage: data.errorMessage
        })
    };

    submitAlwaysFunc = () => {
        this.setState({
            isLoading: false
        })
    };

    render() {
        let stockPrice = <Statistic title="Current Stock Price" value={this.state.price} suffix={currency} />;
        if(this.state.isLoading) {
            stockPrice =
                <div>
                    <Statistic title="Current Stock Price" value={" "}/>
                    <Skeleton title={false} active paragraph={{rows:1}}/>
                </div>;
        }

        return (
            <Row className="panelRow">
                <Col span={24}>
                    {stockPrice}
                </Col>
            </Row>
        );
    }
}