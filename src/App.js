import React from "react";
import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Data from "./data.js";
import Detail from "./Detail.js";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";
import { NULL } from "node-sass";

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [더보기, 더보기변경] = useState([]);
  let [더보기플래그, 더보기플래그변경] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Junny Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을 때 보여줘</div>
        </Route>
        <Route path="/">
          <Jumbotron></Jumbotron>
          <div className="container">
            <div className="row">
              {shoes.map(function (obj, i) {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    더보기변경(result.data);
                    더보기플래그변경(!더보기플래그);
                  })
                  .catch(() => {
                    console.log("실패했어요");
                  });
              }}
            >
              더보기
            </button>
            {더보기플래그 == true ? <h1>하이</h1> : null}
          </div>
        </Route>
      </Switch>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        className="item"
        src={
          `https://codingapple1.github.io/shop/shoes` + (props.i + 1) + `.jpg`
        }
      ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>20% Season Off</h1>
      <p>
        ws : Node.js 공식 홈페이지에서 LTS 버전 설치해주세요. macOS/Linux : nvm
        이라는 도구를 사용하여 Node.js를 설치하시는 것을 권장드립니다. (나중에
        업데이트 하기가 쉽습니다.)
      </p>
      <p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
}

export default App;
