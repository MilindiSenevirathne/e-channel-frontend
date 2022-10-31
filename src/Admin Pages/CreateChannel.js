import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AdminNavbar from "../Pages/AdminNavbar";
import "./CreateChannel.css";

const CreateChannel = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="box1">
        <Form className="box_3">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Doctor Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Enter Doctor name"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
            Specialization
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Enter Specialization" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Hospital
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Enter Hospital" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="date" placeholder="Enter Date" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Time
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Enter Time" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Maximum Number of Patients
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" placeholder="Enter Maximum Number of Patients" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                style={{ backgroundColor: "#003366", borderColor: "#003366" }}
              >
                Save
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

export default CreateChannel;
