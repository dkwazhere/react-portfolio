import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/person-1.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Frank the Tank</h3>
            <p>
              Let's put some happy little clouds in our world. You are only
              limited by your imagination. See how easy it is to create a little
              tree right in your world. How to paint. That's easy. What to
              paint. That's much harder. But they're very easily killed. Clouds
              are delicate. If we're gonna walk though the woods, we need a
              little path. I guess I'm a little weird. I like to talk to trees
              and animals. That's okay though; I have more fun than most people.
              This is a fantastic little painting. Zip. That easy. I can't think
              of anything more rewarding than being able to express yourself to
              others through painting.
            </p>
            <p>
              Let's put some happy little clouds in our world. You are only
              limited by your imagination. See how easy it is to create a little
              tree right in your world. How to paint. That's easy. What to
              paint. That's much harder. But they're very easily killed. Clouds
              are delicate. If we're gonna walk though the woods, we need a
              little path. I guess I'm a little weird. I like to talk to trees
              and animals. That's okay though; I have more fun than most people.
              This is a fantastic little painting. Zip. That easy. I can't think
              of anything more rewarding than being able to express yourself to
              others through painting.
            </p>
            <p>
              Let's put some happy little clouds in our world. You are only
              limited by your imagination. See how easy it is to create a little
              tree right in your world. How to paint. That's easy. What to
              paint. That's much harder. But they're very easily killed. Clouds
              are delicate. If we're gonna walk though the woods, we need a
              little path. I guess I'm a little weird. I like to talk to trees
              and animals. That's okay though; I have more fun than most people.
              This is a fantastic little painting. Zip. That easy. I can't think
              of anything more rewarding than being able to express yourself to
              others through painting.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
