import React  from 'react';
import {Statistic, Skeleton} from "antd"

export default function StockPrice() {
    // Declare a new state variable, which we'll call "count"
    const {price, isLoading, currency} = props;

    let stockPrice = <Statistic title="Current Stock Price" value={price} suffix={currency} />;
    if(isLoading) {
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

export default function StockDescription() {
    // Declare a new state variable, which we'll call "count"
    const {description, isLoading} = props;

    let stockDescription = <Statistic title="Description" value={description} />;
    if(isLoading) {
        stockDescription =
            <div>
                <Statistic title="Description" value={" "}/>
                <Skeleton title={false} active paragraph={{rows:1}}/>
            </div>;
    }

    return (
        <Row className="panelRow">
            <Col span={24}>
                {stockDescription}
            </Col>
        </Row>
    );
}