import React, {Component} from 'react';
import 'bootstrap-sass-grid';
import googleplus from '../image/google-plus.png';
import facebook from '../image/facebook.png';
import linkedin from '../image/linkedin.png';
import twitter from '../image/twitter.png';
import youtube from '../image/youtube.png';
import instagram from '../image/instagram.png';
import footerLine from '../image/footerLine.png';
import '../styles/main.css';
import {Col, Container, Row, Button} from "reactstrap";

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <Container>
                    <Row>
                        <Col xs sm={2} className="d-flex align-items-center">
                            <a href="#" className="footer_channel-link">Follow us</a>
                        </Col>
                        <Col xs sm={6} className="d-flex align-items-center">
                            <div className="SocialBlock d-flex justify-content-around">
                                <a href="#">
                                    <img src={googleplus} className="" alt="" />
                                </a>
                                <a href="#">
                                    <img src={facebook} className="" alt="" />
                                </a>
                                <a href="#">
                                    <img src={linkedin} className="" alt="" />
                                </a>
                                <a href="#">
                                    <img src={twitter} className="" alt="" />
                                </a>
                                <a href="#">
                                    <img src={youtube} className="" alt="" />
                                </a>
                                <a href="#">
                                    <img src={instagram} className="" alt="" />
                                </a>
                            </div>
                        </Col>
                        <Col xs sm={2} className="d-flex align-items-center">
                            <ul className="footer_community">
                                <li className="footer_channel">
                                    <a href="#" className="footer_channel-link">Terms of Service</a>
                                </li>
                                <li className="footer_channel">
                                    <a href="#" className="footer_channel-link">Privacy Policy</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs sm={2} className="d-flex align-items-center">
                            <ul className="footer_community">
                                <li className="footer_channel">
                                    <a href="#" className="footer_channel-link">About Us</a>
                                </li>
                                <li className="footer_channel">
                                    <a href="#" className="footer_channel-link">Press</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <img src={footerLine} className="" alt="" />
                    <p className="copy">© 2017-2018 TalentCoin</p>
                </Container>
            </footer>
        )
    }
}