import Table from 'react-bootstrap/Table';

function DoctorList() {
  return (
    <Table striped bordered hover style={{width:'90%', margin:'auto'}} className="mb-4">
      <thead>
        <tr class>
          
          <th>Doctor Name</th>
          <th>Specialization</th>
          <th>Hospital</th>
          <th>Remove</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default DoctorList;