import React, { useState } from "react";

function UserRow({ info }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <tr onClick={() => setClicked(!clicked)}>
        <td>{info.name}</td>
        <td>{info.username}</td>
        <td>{info.email}</td>
        <td>{info.website}</td>
      </tr>
      {clicked ? (
        <tr>
          <td  colSpan="2">
            <p>address: {info.address.street} st {info.address.suite} {info.address.city} City</p>
            <p>zipcode: {info.address.zipcode} </p>
          </td>
          <td>phone: {info.phone}</td>
          <td >
            <p>company: {info.company.name}</p>
           <p> bs: {info.company.bs}</p>
          </td>
        </tr>
      ) : null}
    </>
  );
}

export default UserRow;
