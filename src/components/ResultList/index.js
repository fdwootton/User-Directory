import React from 'react';

const EmployeeTable = (props) => {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Mark Otto</th>
                <td>markotto@test.com</td>
                <td>555-555-5555</td>
                <td>02-05-1982</td>
            </tr>
            <tr>
                <th scope="row">Jacob Thornton</th>
                <td>jthornton@test.com</td>
                <td>314-555-1234</td>
                <td>12-30-1999</td>
            </tr>
            <tr>
                <th scope="row">Lisa Bird</th>
                <td>lisabird@test.com</td>
                <td>636-555-4321</td>
                <td>09-13-1967</td>
            </tr>
        </tbody>
    </table>
  );
};

export default EmployeeTable;