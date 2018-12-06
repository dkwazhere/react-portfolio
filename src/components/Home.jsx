import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to CodeLife.io</h2>
          <p>
            This is how to build a website with react, react-router and
            bootstrap
          </p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic" />
            <h3>David Kim</h3>
            <p>
              Little trees and bushes grow however makes them happy. We start
              with a vision in our heart, and we put it on canvas. Every
              highlight needs it's own personal shadow. Now we'll take the
              almighty fan brush. Have fun with it. Nothing's gonna make your
              husband or wife madder than coming home and having a snow-covered
              dinner. I thought today we would make a happy little stream that's
              just running through the woods here. I was blessed with a very
              steady hand; and it comes in very handy when you're doing these
              little delicate things. In your world you have total and absolute
              power. Let's make some happy little clouds in our world. You gotta
              think like a tree.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic" />
            <h3>David Kim</h3>
            <p>
              Little trees and bushes grow however makes them happy. We start
              with a vision in our heart, and we put it on canvas. Every
              highlight needs it's own personal shadow. Now we'll take the
              almighty fan brush. Have fun with it. Nothing's gonna make your
              husband or wife madder than coming home and having a snow-covered
              dinner. I thought today we would make a happy little stream that's
              just running through the woods here. I was blessed with a very
              steady hand; and it comes in very handy when you're doing these
              little delicate things. In your world you have total and absolute
              power. Let's make some happy little clouds in our world. You gotta
              think like a tree.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic" />
            <h3>David Kim</h3>
            <p>
              Little trees and bushes grow however makes them happy. We start
              with a vision in our heart, and we put it on canvas. Every
              highlight needs it's own personal shadow. Now we'll take the
              almighty fan brush. Have fun with it. Nothing's gonna make your
              husband or wife madder than coming home and having a snow-covered
              dinner. I thought today we would make a happy little stream that's
              just running through the woods here. I was blessed with a very
              steady hand; and it comes in very handy when you're doing these
              little delicate things. In your world you have total and absolute
              power. Let's make some happy little clouds in our world. You gotta
              think like a tree.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
