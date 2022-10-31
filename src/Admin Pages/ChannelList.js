import Table from "react-bootstrap/Table";
import AdminNavbar from "../Pages/AdminNavbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ChannelList = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <Link to="/channelcreate">
          <Button
            style={{
              backgroundColor: "#003366",
              borderColor: "#003366",
              marginTop: "25px",
              marginLeft: "75px",
            }}
            variant="secondary"
          >
            Create Channel
          </Button>
        </Link>
      </div>
      <Table
        striped
        hover
        style={{ width: "90%", margin: "auto" }}
        className="mt-4"
      >
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Hospital</th>
            <th>Date</th>
            <th>Time</th>
            <th>Maximum No of Patients</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vihan</td>
            <td>Cardiologist</td>
            <td>Panadura Base Hospital</td>
            <td>2022.12.11</td>
            <td>7.00 p.m.</td>
            <td>25</td>
            <td>
              <Button
                style={{ backgroundColor: "#009933", borderColor: "#009933" }}
              >
                Update
              </Button>
              <Button
                style={{ backgroundColor: "#cc0000", borderColor: "#cc0000", marginLeft:"10px" }}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ChannelList;
