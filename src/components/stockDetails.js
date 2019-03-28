import React, { Component }   from 'react';
import {Statistic, Skeleton, Row, Col} from "antd"
import {getCompanyInfo} from "../api/stocks";

export default class StockDetails extends Component {
    state = {
        isLoading: false,
        companyName: " - ",
        description: " - ",
        errorMessage: ""
    };

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.setState({
                isLoading: true
            }, () => {
                getCompanyInfo(this.props.symbol,this.submitSuccessFunc,this.submitFailureFunc,this.submitAlwaysFunc);
            })

        }
    }

    submitSuccessFunc = (data) => {
        this.setState({
            companyName: data.name,
            description: data.description

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
        let stockCompanyName = <Statistic title="Company Name" value={this.state.companyName} />;
        let stockDescription = <Statistic title="Description" value={this.state.description} />;
        if(this.state.isLoading) {
            stockCompanyName =
                <div>
                    <Statistic title="Company Name" value={" "}/>
                    <Skeleton title={false} active paragraph={{rows:1}}/>
                </div>;
            stockDescription =
                <div>
                    <Statistic title="Description" value={" "}/>
                    <Skeleton title={false} active paragraph={{rows:3}}/>
                </div>
        }

        return (
            <div>
                <Row className="panelRow">
                    <Col span={24}>
                        {stockCompanyName}
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col span={24}>
                        {stockDescription}
                    </Col>
                </Row>
            </div>
        );
    }

}