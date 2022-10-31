import Table from 'react-bootstrap/Table';
import AdminNavbar from "../Pages/AdminNavbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function DoctorList() {
    return (
        <div>
          <AdminNavbar />
          <div>
            <Link to="/createdoctor"><Button
              style={{ backgroundColor: "#003366", borderColor: "#003366", marginTop:"25px" , marginLeft:"75px"}}
              variant="secondary"
            >
              Create Doctor
            </Button></Link>
          </div>
          <Table
            striped
            hover
            style={{ width: "80%", margin: "auto" }}
            className="mt-4"
          >
            <thead>
              <tr>
                <th style={{justifycontent: 'center'}}>Doctor Name</th>
                <th>Specialization</th>
                <th>Hospital</th>
                <th> </th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>Vihan</td>
                <td>Cardiologist</td>
                <td>Panadura Base Hospital</td>
                <td><Button
                type="submit"
                style={{ backgroundColor: "#009933", borderColor: "#009933" ,marginRight:"-30px"}}
              >
                
               Update
              </Button></td>
                <td><Button
                type="submit"
                style={{ backgroundColor: "#cc0000", borderColor: "#cc0000" ,marginRight:"-30px"}}
              >
                
               Remove
              </Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
}

export default DoctorList;