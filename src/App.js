import React, {Component} from 'react';
import {Card, Col, Row, Typography} from 'antd';
import TickerPanel from "./components/tickerPanel.js";
import './App.css';

const { Title } = Typography;


class App extends Component {
    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={14} offset={5}>
                        <Title>Stock Viewer</Title>
                        <Card>
                            <TickerPanel/>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default App;
