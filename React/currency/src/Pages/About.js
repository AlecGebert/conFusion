import React, { Component } from "react";
import { Container, Tab, Nav, Col, Row } from "react-bootstrap";
import RoomOne from "../pictures/Bedroom.jpg";
import RoomTwo from "../pictures/Tableroom.jpg";
import RoomThree from "../pictures/Guestroom.jpg";
import RoomFour from "../pictures/Childroom.jpg";
import RoomFive from "../pictures/Bathroom.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12} md={12} lg={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link className="text-center" eventKey="first">Bedrooms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-center" eventKey="second">Table Rooms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-center" eventKey="fhird">Guest Rooms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-center" eventKey="fourth">Children Rooms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-center" eventKey="fifth">Bathrooms</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} md={12} lg={9}>
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="first">
                  <img className="mx-auto d-none d-md-block" src={RoomOne} alt="Bedrooms" />
                  <p className="mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit quidem earum doloremque pariatur nisi ratione
                    similique quod voluptate magni, et aliquam, odit ipsum illo
                    molestiae, dolorum debitis autem eos officiis.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img className="mx-auto d-none d-sm-block" src={RoomTwo} alt="Table Rooms" />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus illo recusandae quam reprehenderit, impedit in
                    nihil assumenda magnam vel inventore earum provident sed
                    officia placeat tempore porro ea repellendus ut.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fhird">
                  <img className="mx-auto d-none d-md-block" src={RoomThree} alt="Guest Rooms" />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    veniam qui assumenda magni nulla nisi nobis incidunt modi
                    illum dolorum, similique explicabo eaque itaque quo deserunt
                    tempore laboriosam voluptatum provident.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img className="mx-auto d-none d-md-block" src={RoomFour} alt="Children Rooms" />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure rem, quos eius delectus molestiae doloremque maxime ab
                    facere temporibus dolor, sequi obcaecati ipsa accusantium
                    vel expedita vero natus dicta. Quis?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img className="mx-auto d-none d-md-block" src={RoomFive} alt="Bathrooms" />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, debitis. Ipsa sequi aliquam maiores delectus minus
                    est fugit eos nam inventore. Temporibus suscipit
                    perspiciatis nisi ipsum velit delectus quisquam pariatur!
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
