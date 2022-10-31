import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return(
        <div className="navbar" style={{ padding: "0", marginTop: "0" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{
            backgroundColor: "#003366",
            width: "100%",
            padding: "0",
            marginTop: "0",
          }}
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/"><img src="logo.png" alt="logo" width="150px" /></Link>
            </Navbar.Brand>
          </Container>
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/channel-list">Channels</Nav.Link>
            <Nav.Link href="">
              Doctors
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
}

export default AdminNavbar;