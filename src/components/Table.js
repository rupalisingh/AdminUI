import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Checkbox } from "@mui/material";
import ActionButtons from "./ActionButtons";
import "../css/Table.css";

export default function Table() {
  const {
    userData,
    currentSearchText,
    setselectedRows,
    selectedRows,
    setFilteredRows,
    setUserData,
  } = useContext(AuthContext);


  let rows = [];
  if (currentSearchText === "") {
    userData.map((user, index) => (rows[index] = user[0]));
  } else {
    let val = currentSearchText.toLowerCase();
    let filteredArr = [];
    filteredArr = userData.filter(
      (user) =>
        user[0].name.toLowerCase().includes(val) ||
        user[0].email.toLowerCase().includes(val) ||
        user[0].role.toLowerCase().includes(val)
    );
    setFilteredRows(filteredArr);
    filteredArr.map((user, index) => (rows[index] = user));
  }

  const handleSelect = (e, id) => {
    setselectedRows([...selectedRows, id]);
  };


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox key={-1} />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={row.id}>
                <td>
                  <Checkbox
                    key={row.id}
                    onChange={(e) => handleSelect(e, row.id)}
                  />
                </td>
                <td contentEditable = {row.editable}>{row.name}</td>
                <td contentEditable = {row.editable}>{row.email}</td>
                <td contentEditable = {row.editable}>{row.role}</td>
                <td>
                  <ActionButtons id={row.id} index = {index} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
