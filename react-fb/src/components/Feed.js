import React from "react";
import { Container, Row, Col } from "react-materialize";

const Feed = () => {
  return (
    <Container>
      <Row>
        <Col s={12} m={4}>
          Profile
        </Col>
        <Col s={12} m={8}>
          Feed
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
