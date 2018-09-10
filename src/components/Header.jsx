import React, {Component} from 'react';
import logo from '../image/TalentCoin.png';
//import line from "../image/line-main.png";
import 'bootstrap-sass-grid';
import '../styles/main.css';
import {Col, Container, Row, Button} from "reactstrap";


export default class Header extends Component{
    render(){
        return(
            <header className="header d-flex justify-content-around align-items-center">
                <Container>
                    <Row>
                        <Col xs sm={3}>
                            <img src={logo} className="" alt="logo" />
                        </Col>
                        <Col xs sm={9}>
                            <Row className="d-flex justify-content-around align-items-center">
                                <a className="header-link" href="#">How It Works</a>
                                <div className="float-right">
                                    <Button className="btn main-button">Login</Button>
                                    <Button className="btn main-button">Sign Up</Button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/*<img src={line} className="line-main" alt="Line" />*/}
            </header>
        )
    }
}