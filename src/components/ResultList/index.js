import React from "react";

const ResultList = (props) => {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" onClick={() => {return (console.log('make sorting function'))}}>NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">PHONE</th>
        </tr>
      </thead>
      <tbody>
        {props.state.displayedEmployees.map((employee) => {
          const Image = employee.picture.thumbnail;
          const firstName = employee.name.first;
          const lastName = employee.name.last;
          const Name = firstName + " " + lastName;
          const Email = employee.email;
          const Phone = employee.phone;

          return (
            <tr key={Name}>
              <td><img alt={Name} src={Image} /></td>
              <td>{Name}</td>
              <td>{Email}</td>
              <td>{Phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultList;