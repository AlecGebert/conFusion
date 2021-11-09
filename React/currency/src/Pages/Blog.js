import React, { Component } from "react";
import ImgFurOne from "../pictures/comfy.png";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={8} className="mt-2">
            <div className="media">
              <img
                width={100}
                height={100}
                className="imagePost mr-3"
                src={ImgFurOne}
                alt="comfy"
              />
              <div className="media-body">
                <h5 className="mt-0 text-center">Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus necessitatibus illo architecto, quibusdam nulla eum
                  voluptatum sed est distinctio repudiandae. Ipsum non doloribus
                  fugiat iure quos, esse reprehenderit voluptatem suscipit.
                </p>
              </div>
            </div>
          
          <div className="media">
              <img
                width={100}
                height={100}
                className="imagePost mr-3"
                src={ImgFurOne}
                alt="comfy"
              />
              <div className="media-body">
                <h5 className="mt-0 text-center">Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus necessitatibus illo architecto, quibusdam nulla eum
                  voluptatum sed est distinctio repudiandae. Ipsum non doloribus
                  fugiat iure quos, esse reprehenderit voluptatem suscipit.
                </p>
              </div>
            </div>
          
            <div>
              <img
                width={100}
                height={100}
                className="imagePost mr-3"
                src={ImgFurOne}
                alt="comfy"
              />
              <div className="media-body">
                <h5 className="mt-0 text-center">Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus necessitatibus illo architecto, quibusdam nulla eum
                  voluptatum sed est distinctio repudiandae. Ipsum non doloribus
                  fugiat iure quos, esse reprehenderit voluptatem suscipit.
                </p>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <h5 className="text-center mt-2">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
