import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import {Col, Container, Row, Button} from "reactstrap";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import user from '../image/user.png';
import pdf from '../image/pdf.png';
import '../styles/main.css';
import '../styles/personal_cabinet.css';
import '../styles/personal_cabinet_setting.css';

export default class Personal_cabinet_setting extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Header/>
                <main className="Personal_cabinet_setting">
                    <Container>
                        <Row className="personal-information">
                            <Col xs sm={9}>
                            </Col>
                            <Col xs sm={3}>
                                <div className="personal-information-link">
                                    <a href="#">Information</a>
                                    <span>|</span>
                                    <a href="#">Settings</a>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                                <Tab label="Personal Information">
                                    <Row>
                                    <Col xs sm={4} className="text-center">
                                        <img src={user} alt=""/>
                                        <a className="link-banner">Download photo</a>
                                        <a className="link-banner">Remove photo</a>
                                    </Col>
                                    <Col xs sm={8}>
                                        <p className="label-input">
                                            <label>
                                                First name:
                                            </label>
                                            <input type="text" name="name" placeholder="First name"/>
                                        </p>
                                        <p className="social label-input">
                                            <label>
                                                Other accounts
                                            </label>
                                            <p className="wrapperFromSocial">
                                                <span><FaFacebookF/></span>
                                            </p>
                                            <p className="wrapperFromSocial">
                                                <span><FaLinkedinIn/></span>
                                            </p>
                                            <p className="wrapperFromSocial">
                                                <span><FaTwitter/></span>
                                            </p>
                                            <p className="wrapperFromSocial">
                                                <span><FaInstagram/></span>
                                            </p>
                                        </p>
                                    </Col>
                                    </Row>
                                </Tab>
                                <Tab label="Education">Tab 2 content</Tab>
                                <Tab label="Security and Change">Tab 3 content</Tab>
                                <Tab label="Password">Tab 4 content</Tab>
                                <Tab label="Notification">Tab 5 content</Tab>
                                <Tab label="Settings">Tab 6 content</Tab>
                            </Tabs>
                        </Row>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col xs sm={7} className="">
                                <p className="name">
                                    Project name
                                    <span>(confirm)</span>
                                </p>
                            </Col>
                            <Col xs sm={5} className="text-center">
                                <div className="personal-information-link">
                                    <a href="#">Main</a>
                                    <span>|</span>
                                    <a href="#">Company</a>
                                    <span>|</span>
                                    <a href="#">Projects</a>
                                    <span>|</span>
                                    <a href="#">Talents</a>
                                    <span>|</span>
                                    <a href="#">Settings</a>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs sm={8} className="company_info">
                                <p>
                                    Zrozen funds: <span>5500 TalentCoin</span> (2750 TalentCoin and 2750 EURO)
                                </p>
                                <p>Already paid: <span>0 TalentCoin</span></p>
                                <p><b>Involved Talents: <span>0</span></b></p>
                            </Col>
                            <Col xs sm={4} className="company_info">
                                <p>
                                    <a className="link-banner">Go to Task Tracker</a>
                                </p>
                                <p>
                                    <a className="link-banner">Close project (all OK)</a>
                                </p>
                                <p>
                                    <a className="link-banner">Close project (PROBLEM)</a>
                                </p>
                            </Col>
                            <hr className="pageLine"></hr>
                        </Row>
                        <Row className="overview">
                            <h3>Overview</h3>
                            <p><b>Line of business</b></p>
                            <p><b>Specialty</b></p>
                            <p><b>Skills</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p><b>Level:</b> Junior</p>
                            <p><b>Description</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p><b>Addition Material </b></p>
                            <p>
                                <img src={pdf} alt=""/>
                            </p>
                            <p><b>Deadline:</b> Next Monday</p>
                            <p><b>Payment</b></p>
                            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                                <Tab label="Payment by stages">
                                    <BootstrapTable>
                                        <TableHeaderColumn dataField='id' isKey>Stages</TableHeaderColumn>
                                        <TableHeaderColumn dataField='name'>Name tags</TableHeaderColumn>
                                        <TableHeaderColumn dataField='price'>Payment</TableHeaderColumn>
                                    </BootstrapTable>
                                </Tab>
                                <Tab label="Payment on time">Tab 2 content</Tab>
                            </Tabs>
                            <p>
                                <b>Total cost:</b>  <span>5500 TalentCoin</span> (equal 5500 EURO)
                            </p>
                            <p><b>Percentage of TalentCoin from the total amount:</b> 50 %</p>
                        </Row>
                    </Container>
                </main>
                <Footer/>
            </div>
        )
    }
}