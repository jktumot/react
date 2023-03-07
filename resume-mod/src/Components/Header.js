import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import logo from "../assets/logoM-2.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img
                  src={logo}
                  height="50"
                  width="150"
                  className="d-inline-block align-top"
                  alt="Logo"
                />  
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/portfolio">
                  {" "}
                  Portfolio{" "}
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </>
    );
  }
}
