import React, { Component } from 'react';
// import logo from './logo.svg';
import logo2 from './image/body.png'
import 'bootstrap/dist/css/bootstrap-grid.css';
import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {Col, Container, Row, Button} from "reactstrap";
import './App.css';
import './styles/main.css'
import './styles/personal_cabinet.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header d-flex justify-content-around align-items-center">
          <Container>
          <Row>
              <Col xs sm={3}>
                <img src="image/body.png" className="App-logo" alt="logo" />
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
        </header>
        <main>
          <div className="banner">
            <div className="container-fluid">
                <h1>Lorem ipsum</h1>
            </div>
            <div className="container-fluid">
                <a className="link-banner">Registration</a>
            </div>
            <div className="container-fluid">
                <a className="scroll"></a>
            </div>
          <div className="container-fluid d-flex banner-block">
          <Col xs sm={3}>
            <img src={logo} className="App-logo" alt="logo" />
              <p className="banner-text">
                Talents, anchor and store your professional identity on a blockchain and
                enhance your capabilities for new challenges realizations
              </p>
                <hr className="line"></hr>
          </Col>
          <Col xs sm={3}>
              <img src={logo} className="App-logo" alt="logo" />
              <p className="banner-text">
                Companies, reinvent and optimize your work force allocation and
                management (inside and out of your organization)
              </p>
               <hr className="line"></hr>
          </Col>
          <Col xs sm={3}>
              <img src={logo} className="App-logo" alt="logo" />
                <p className="banner-text">
                  Talents and Companies, track and share your capacity to innovate,
                  by taking part in challenging projects and build your attractive reputation
                </p>
                <hr className="line"></hr>
          </Col>
          <Col xs sm={3}>
              <img src={logo} className="App-logo" alt="logo" />
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
                <h3>What TalentCoin offer?</h3>
            <Row>
            <Col xs sm={4}>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p className="text">
                        More than <span>80%</span> of the talents and workers get bored in
                        their job in less than 24 months and then less engaged
                        (20% roughly and it still decreases) (Gallup study), which lead to delay,
                        unanswered needs, revenue depreciation, and unwilled turnover.
                  </p>
            </Col>
      <Col xs sm={4}>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text">
          <span>65%</span> of the jobs of our new generation are to be invented in the 15 coming years.
          Why don’t we dream of a collective flexible way to enjoy and reward full time workload and maximize talents employability but also loyalty as an innovative approach of their interactions
      in an international co-sharing-work-mate place ?
      </p>
      </Col>
      <Col xs sm={4}>
          <img src={logo} className="App-logo" alt="logo" />
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
          </div>


          <div className="TheeBlock">
            <Container>
                <h3>How It Works</h3>
            <Row>
                <Col xs sm={5}>
                    <hr className="lineBlue"></hr>
                </Col>
                <Col xs sm={7}>
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
          <Col xs sm={7}>
          <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <hr className="lineBlue"></hr>
      </Col>
      <Col xs sm={5}>

          </Col>
      </Row>
          </Container>
          </div>

          <div className="FourBlock">
                  <Container>
                  <h3>About Us</h3>
              <Row>
              <Col xs sm={5}>
                  <hr className="lineBlue"></hr>
                    </Col>
                    <Col xs sm={7}>
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
                      <img src={logo} className="App-logo" alt="logo" />
                    <div className="about-us">
                        <p className="about-us_name">John Doe</p>
                        <hr className="about-us_line"></hr>
                        <p className="about-us_specialization">specialization</p>
                          <p className="about-us_text">
                              Talents, anchor and store your professional identity on a blockchain and
                              enhance your capabilities for new challenges realizations
                          </p>
                    </div>
                  </Col>
                  <Col xs sm={3}>
                      <img src={logo} className="App-logo" alt="logo" />
                      <div className="about-us">
                      <p className="about-us_name">John Doe</p>
                        <hr className="about-us_line"></hr>
                      <p className="about-us_specialization">specialization</p>
                      <p className="about-us_text">
                      Talents, anchor and store your professional identity on a blockchain and
                        enhance your capabilities for new challenges realizations
                        </p>
                      </div>
                  </Col>
      <Col xs sm={3}>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="about-us">
          <p className="about-us_name">John Doe</p>
      <hr className="about-us_line"></hr>
          <p className="about-us_specialization">specialization</p>
          <p className="about-us_text">
          Talents, anchor and store your professional identity on a blockchain and
      enhance your capabilities for new challenges realizations
      </p>
      </div>
      </Col>
      <Col xs sm={3}>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="about-us">
          <p className="about-us_name">John Doe</p>
      <hr className="about-us_line"></hr>
          <p className="about-us_specialization">specialization</p>
          <p className="about-us_text">
          Talents, anchor and store your professional identity on a blockchain and
      enhance your capabilities for new challenges realizations
      </p>
      </div>
      </Col>
                </Row>
              </Container>
          </div>
        </main>
      <footer>
        <Container>
          <Row>
          <Col xs sm={2}>
            <a href="#" className="footer_channel-link">Follow us</a>
          </Col>
          <Col xs sm={6}>
          </Col>
          <Col xs sm={2}>
            <ul className="footer_community">
                <li className="footer_channel">
                    <a href="#" className="footer_channel-link">Terms of Service</a>
                </li>
              <li className="footer_channel">
                  <a href="#" className="footer_channel-link">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col xs sm={2}>
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
        </Container>
      </footer>
          <div className="LoginMain">
            <Container>
                <div className="personal-information">
                    <Row className="d-flex justify-content-between">
                      <h3>Personal information</h3>
                    <p className="personal-information-link">
                        <a href="#">Information</a>
                        <span>|</span>
                        <a href="#">Settings</a>
                    </p>
                    </Row>
                    <Row className="d-flex">
                      <Col xs sm={3}>
                        <div className="personal-information-foto"></div>
                      </Col>
                    </Row>
                </div>
            </Container>
          </div>
      </div>
    );
  }
}

export default App;
