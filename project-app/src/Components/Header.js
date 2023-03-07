import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import logo from "./logoM.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Education from "../Pages/Education";
import Contacts from "../Pages/Contacts";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="40"
                  width="40"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    {" "}
                    Главная{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/education">
                    {" "}
                    Образование{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/portfolio">
                    {" "}
                    Портфолио{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts">
                    {" "}
                    Контакты{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    {" "}
                    Обо мне{" "}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
