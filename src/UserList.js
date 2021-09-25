import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import UserRow from "./UserRow";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users);

  return (
    
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} info={user} />
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
