import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarComponent from "./Navbar";

const Channel = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <Form className="mt-4" style={{ width: "500px", margin: "auto" }}>
        <Form.Group className="mb-3">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>NIC Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Your NIC number" />
        </Form.Group>
        <p>Your doctor fee is <span style={{color:"blue"}}>Rs.2500.00</span></p>

        <Button variant="primary" type="submit" style={{ backgroundColor: "#003366", borderColor: "#003366" }}>
          Make Appoinment
        </Button>
      </Form>
    </div>
  );
};

export default Channel;
