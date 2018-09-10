import React, { Component } from 'react';
import banner from '../image/banner.png';
import scroll from '../image/mouse.png';
import network from '../image/network.png';
import people from '../image/people.png';
import handshake from '../image/handshake.png';
import hired from '../image/hired.png';
import people_1 from '../image/people_1.png';
import search from '../image/lupa.png';
import bulb from '../image/ev.png';
import lineFromTitle from '../image/linefromtitle.png';
import secondblock from '../image/secondBack.png';
import theeBlock from '../image/theeBlock.png';
import howItWork1 from '../image/img_1.png';
import howItWork2 from '../image/img_2.png';
import specialization1 from '../image/spec1.png';
import specialization2 from '../image/spec2.png';
import specialization3 from '../image/spec3.png';
import specialization4 from '../image/spec4.png';
import aboutlike from '../image/about-like.png';
import 'bootstrap/dist/css/bootstrap-grid.css';
import {Col, Container, Row, Button} from "reactstrap";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/main.css'

export default class Homepage extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <div className="banner">
                        <img src={banner} className="" alt="Banner" />
                        <div className="container-fluid">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div className="container-fluid">
                            <a className="link-banner">Registration</a>
                        </div>
                        <div className="container-fluid">
                            <a className="scroll floating"><img src={scroll} className="" alt="scroll" /></a>
                        </div>
                        <div className="container-fluid d-flex banner-block">
                            <Col xs sm={3}>
                                <img src={network} className="" alt="network" />
                                <p className="banner-text">
                                    Talents, anchor and store your professional identity on a blockchain and
                                    enhance your capabilities for new challenges realizations
                                </p>
                                <hr className="line"></hr>
                            </Col>
                            <Col xs sm={3}>
                                <img src={people} className="" alt="people" />
                                <p className="banner-text">
                                    Companies, reinvent and optimize your work force allocation and
                                    management (inside and out of your organization)
                                </p>
                                <hr className="line"></hr>
                            </Col>
                            <Col xs sm={3}>
                                <img src={handshake} className="" alt="handshake" />
                                <p className="banner-text">
                                    Talents and Companies, track and share your capacity to innovate,
                                    by taking part in challenging projects and build your attractive reputation
                                </p>
                                <hr className="line"></hr>
                            </Col>
                            <Col xs sm={3}>
                                <img src={hired} className="" alt="hired" />
                                <p className="banner-text">
                                    Stand out from the crowd in right Time to achieve amazing new businesses
                                    That's TalentCoin community promise : be bold and ambitious to create human and ' +
                                    'Time valued, Register In and use the work force of our worldwide community
                                </p>
                            </Col>
                        </div>
                    </div>

                    <div className="SecondBlock">
                        <Container>
                            <h3>
                                <span>What TalentCoin offer?</span>
                                <img src={lineFromTitle} className="" alt="lineFromTitle" />
                            </h3>
                            <Row className="SecondBlockRow">
                                <Col xs sm={4}>
                                    <img src={people_1} className="" alt="" />
                                    <p className="text">
                                        More than <span>80%</span> of the talents and workers get bored in
                                        their job in less than 24 months and then less engaged
                                        (20% roughly and it still decreases) (Gallup study), which lead to delay,
                                        unanswered needs, revenue depreciation, and unwilled turnover.
                                    </p>
                                </Col>
                                <Col xs sm={4}>
                                    <img src={search} className="" alt="" />
                                    <p className="text">
                                        <span>65%</span> of the jobs of our new generation are to be invented in the 15 coming years.
                                        Why don’t we dream of a collective flexible way to enjoy and reward full time workload and maximize talents employability but also loyalty as an innovative approach of their interactions
                                        in an international co-sharing-work-mate place ?
                                    </p>
                                </Col>
                                <Col xs sm={4}>
                                    <img src={bulb} className="" alt="" />
                                    <p className="text">
                                        <span>100%</span> of Opportunities are not already addressed, alternative or additional markets
                                        unexplored and cross border exposure remains difficult, Increase strengths of members,
                                        revenues and talents quality of work within organization or make yours soft skills
                                        your professional tracks remain targeted dreams.  Talent is an asset, talent is your
                                        capital it worth to be trusted and cared about irrespective of who you are a well off,
                                        well known organization or an atypical worker.
                                        That’s TalentCoin promise.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <img src={secondblock} className="" alt="" />
                    </div>

                    <div className="TheeBlock">
                        <img src={theeBlock} className="" alt="" />
                        <Container>
                            <h3>
                                <span>How It Works</span>
                                <img src={lineFromTitle} className="" alt="lineFromTitle" />
                            </h3>
                            <Row>
                                <Col xs sm={6} className="TheeBlockImg">
                                    <img src={howItWork1} className="" alt="" />
                                    <hr className="lineBlue"></hr>
                                </Col>
                                <Col xs sm={6}>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs sm={6}>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Col>
                                <Col xs sm={6} className="TheeBlockImg">
                                    <hr className="lineBlue"></hr>
                                    <img src={howItWork2} className="" alt="" />
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="FourBlock">
                        <Container>
                            <h3>
                                <span>About Us</span>
                                <img src={lineFromTitle} className="" alt="lineFromTitle" />
                            </h3>
                            <Row>
                                <Col xs sm={6}>
                                    <img src={aboutlike} className="FourBlockImg" alt="" />
                                    <hr className="lineBlue"></hr>
                                </Col>
                                <Col xs sm={6}>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs sm={3}>
                                    <img src={specialization1} className="" alt="" />
                                    <div className="about-us">
                                        <div className="about-us-wrapper">
                                            <p className="about-us_name">John Doe</p>
                                            <hr className="about-us_line"></hr>
                                            <p className="about-us_specialization">specialization</p>
                                        </div>
                                        <p className="about-us_text">
                                            Talents, anchor and store your professional identity on a blockchain and
                                            enhance your capabilities for new challenges realizations
                                        </p>
                                    </div>
                                </Col>
                                <Col xs sm={3}>
                                    <img src={specialization2} className="" alt="" />
                                    <div className="about-us">
                                        <div className="about-us-wrapper">
                                            <p className="about-us_name">John Doe</p>
                                            <hr className="about-us_line"></hr>
                                            <p className="about-us_specialization">specialization</p>
                                        </div>
                                        <p className="about-us_text">
                                            Talents, anchor and store your professional identity on a blockchain and
                                            enhance your capabilities for new challenges realizations
                                        </p>
                                    </div>
                                </Col>
                                <Col xs sm={3}>
                                    <img src={specialization3} className="" alt="" />
                                    <div className="about-us">
                                        <div className="about-us-wrapper">
                                            <p className="about-us_name">John Doe</p>
                                            <hr className="about-us_line"></hr>
                                            <p className="about-us_specialization">specialization</p>
                                        </div>
                                        <p className="about-us_text">
                                            Talents, anchor and store your professional identity on a blockchain and
                                            enhance your capabilities for new challenges realizations
                                        </p>
                                    </div>
                                </Col>
                                <Col xs sm={3}>
                                    <img src={specialization4} className="" alt="" />
                                    <div className="about-us">
                                        <div className="about-us-wrapper">
                                            <p className="about-us_name">John Doe</p>
                                            <hr className="about-us_line"></hr>
                                            <p className="about-us_specialization">specialization</p>
                                        </div>
                                        <p className="about-us_text">
                                            Talents, anchor and store your professional identity on a blockchain and
                                            enhance your capabilities for new challenges realizations
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <img src={secondblock} className="" alt="" />
                    </div>
                </main>
            <Footer/>
            </div>
        );
    }
}



