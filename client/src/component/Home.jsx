import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-md-center m-auto" style={{ height: '70vh', color: 'tomattow' }}>
        <Col xs={12} md={6} className="text-center">
          <h1>Welcome to the Home Page</h1>
          <p>This is the home page of our React app.</p>
          <Button className='btn btn-danger' onClick={() => navigate('/signup')}>LETS GO</Button>
        </Col>
      </Row>
    </Container >
  );
};

export default Home;
