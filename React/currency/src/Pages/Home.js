import React, { Component } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import ImageTeam from "../pictures/team.jpg";
import ImageDesign from "../pictures/design.jpg";
import ImageFurniture from "../pictures/furniture.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12} className="mt-2">
            <h2 className="text-center m-4">Design</h2>
              <Card className="text-center">
                <Card.Img variant="top" src={ImageDesign} />
                <Card.Body>
                  <Card.Title>Design</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About Design</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="mt-2">
            <h2 className="text-center m-4">Furniture</h2>
              <Card className="text-center">
                <Card.Img variant="top" src={ImageFurniture} />
                <Card.Body>
                  <Card.Title>Furniture</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About Furniture</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={12} className="mt-2">
            <h2 className="text-center m-4">Our Team</h2>
              <Card className="text-center">
                <Card.Img variant="top" src={ImageTeam} />
                <Card.Body>
                  <Card.Title>Our Team</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About Team</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
