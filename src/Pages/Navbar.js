import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
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
              <img src="logo.png" alt="logo" width="150px" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    )
}

export default NavbarComponent;