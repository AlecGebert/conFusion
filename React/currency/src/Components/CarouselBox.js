import React, { Component } from "react";
import { Carousel, CarouselItem, Container, Row, Col } from "react-bootstrap";
import InteriorOne from "../pictures/inter1.jpg";
import InteriorTwo from "../pictures/inter2.jpg";
import InteriorThree from "../pictures/inter3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className='mt-1'>
            <Col xs lg="12">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={InteriorOne}
                    alt="InteriorOne"
                  />
                  <Carousel.Caption>
                    <h3>Interior One</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={InteriorTwo}
                    alt="InteriorTwo"
                  />
                  <Carousel.Caption>
                    <h3>Interior Two</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={InteriorThree}
                    alt="InteriorThree"
                  />
                  <Carousel.Caption>
                    <h3>Interior Three</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
