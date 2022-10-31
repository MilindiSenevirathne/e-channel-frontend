import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavbarComponent from "./Navbar";

function ResultPage() {
  return (
<div>
    <NavbarComponent />
    <Container  style={{ height: '26rem'}}>
   <Row>
   {[0, 1, 2, 3, 4].map(i => (
    <Col xs="4">
  
    <Card border="info" style={{ width: '18rem', height: '25rem', margin:'auto'}} className='mt-4'>
      <Card.Img variant="top" style={{ width: '8rem', height: '8rem', marginLeft:'80px'}} src="/hospital.png"/>
      <Card.Body>
        <Card.Title>Hospital Name</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Date:</ListGroup.Item>
        <ListGroup.Item>Time:</ListGroup.Item>
        <ListGroup.Item>Channeling Fee:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button href="#">Available</Button>
      </Card.Body>
    </Card>
    </Col>
            ))}
    </Row>
   </Container>
   </div>
  );
}

export default ResultPage;