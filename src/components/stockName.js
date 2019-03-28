import React  from 'react';
import {Statistic, Skeleton, Row, Col} from "antd"

export default function StockPrice({name, isLoading}) {
    let stockPrice = <Statistic title="Company Name" value={name} />;
    if(isLoading) {
        stockPrice =
            <div>
                <Statistic title="Company Name" value={" "}/>
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