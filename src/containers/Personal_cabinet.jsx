import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import lineFromTitle from '../image/linefromtitle.png';
import foto from '../image/photo.png';
import Workingdesigner from '../image/Workingdesigner.png';
import {Col, Container, Row, Button} from "reactstrap";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { IconContext } from "react-icons";
import '../styles/main.css';
import '../styles/personal_cabinet.css';

export default class Personal_cabinet extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main className="Personal_cabinet">
                    <Container>
                        <Row className="personal-information">
                            <Col xs sm={9}>
                                <h3>
                                    <span>Personal information</span>
                                    <img src={lineFromTitle} className="" alt="lineFromTitle" />
                                </h3>
                            </Col>
                            <Col xs sm={3}>
                                <div className="personal-information-link">
                                    <a href="#">Information</a>
                                    <span>|</span>
                                    <a href="#">Settings</a>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col xs sm={4} className="text-center">
                                <img src={foto} alt=""/>
                                <p className="d-flex justify-content-between wrapper">
                                    <a className="wrapperFa"><FaTrashAlt/></a>
                                    <a className="wrapperFa"><FaPencilAlt/></a>
                                </p>
                            </Col>
                            <Col xs sm={4} className="private-information">
                                <p className="name">
                                    John Doe
                                    <span>(confirm)</span>
                                </p>
                                <p className="oneStyle">Ukraine / Odessa</p>
                                <p className="oneStyle">Time zone: GMT +1 (France / Paris)</p>
                                <p className="oneStyle Lang">Language: English/France</p>
                                <p className="download"><a href="#">Download Resume | Change</a></p>
                                <p className="oneStyle valuation">Valuation of companies</p>
                                <p className="star"> </p>
                            </Col>
                            <Col xs sm={4} className="d-flex justify-content-center">
                                <div className="borderBlock d-flex justify-content-center align-items-center">
                                    <span>Logo</span>
                                </div>
                                <p className="name_company">Name company</p>
                                <a className="link-banner">Go to project </a>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <p className="toDo">To do</p>
                            <p className="checkbox d-flex align-items-center">
                                <span></span>
                                Fill out a profile
                            </p>
                            <p className="checkbox d-flex align-items-center">
                                <span></span>
                                Add portfolio
                            </p>
                            <p className="checkbox d-flex align-items-center">
                                <span></span>
                                Add specialisation
                            </p>
                            <p className="checkbox d-flex align-items-center">
                                <span></span>
                                Generate new private key
                            </p>
                            <p className="checkbox d-flex align-items-center">
                                <span></span>
                                To sign an agreement with service of TalentCoin
                            </p>
                            <p className="checkbox">
                                <span></span>
                                You've chat with Member about Project
                            </p>
                        </Row>
                        <Row className="d-flex">
                            <p className="toDo">Work time (in France time)</p>
                        </Row>
                        <Row className="d-flex">
                            <p className="toDo">My specialisation</p>
                        </Row>
                        <Row className="d-flex margin-top">
                            <Col xs sm={4}>
                                <div className="border-wrapper">
                                    <a href="#"><img src={Workingdesigner} className="" alt="" /></a>
                                    <p className="headerTitle"><a href="#">Header</a></p>
                                    <p className="textDescription"><span>Description</span>: Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p className="more"><a>more ...</a></p>
                                </div>
                            </Col>
                            <Col xs sm={2}>
                                <div className="border-wrapper-add">
                                    <p className="plus">+</p>
                                    <p className="text">add specialisation</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <p className="toDo">Portfolio <a>see all portfolio...</a></p>
                        </Row>
                        <Row className="d-flex margin-top">
                            <Col xs sm={4}>
                                <div className="border-wrapper">
                                    <a href="#"><img src={Workingdesigner} className="" alt="" /></a>
                                    <p className="headerTitle"><a href="#">Header</a></p>
                                    <p className="textDescription"><span>Description</span>: Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p className="more"><a>more ...</a></p>
                                </div>
                            </Col>
                            <Col xs sm={4}>
                                <div className="border-wrapper">
                                    <a href="#"><img src={Workingdesigner} className="" alt="" /></a>
                                    <p className="headerTitle"><a href="#">Header</a></p>
                                    <p className="textDescription"><span>Description</span>: Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p className="more"><a>more ...</a></p>
                                </div>
                            </Col>
                            <Col xs sm={2}>
                                <div className="border-wrapper-add">
                                    <p className="plus">+</p>
                                    <p className="text">add work to portfolio</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer/>
            </div>
        );
    }
}
