import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="text-center">
          <h1>Welcome to the Home Page</h1>
          <p>This is the home page of our React app.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
