
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./CreateDoctor.css";


const CreateDoctor = () => {
  return (
    <div>
       <div style={{height:'80px'}}></div>
      <div className="boxCreateDoctor">
        <Form className="box_2" style={{marginTop:'200px', marginLeft:'100px'}}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Doctor Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Doctor name"/>
            </Col>
          </Form.Group>

         

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Specialization
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Specialization" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
             Available Hospitals
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Hospital" />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                style={{ backgroundColor: "#003366", borderColor: "#003366" }}
              >
                
               Create Doctor
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
};

export default CreateDoctor;
