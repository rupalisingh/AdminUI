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
    Editable,
  } = useContext(AuthContext);

  let rows = [];
  if (currentSearchText === "") {
    userData.map((user, index) => (rows[index] = user));
  } else {
    let val = currentSearchText.toLowerCase();
    let filteredArr = [];
    filteredArr = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(val) ||
        user.email.toLowerCase().includes(val) ||
        user.role.toLowerCase().includes(val)
    );
    setFilteredRows(filteredArr);
    filteredArr.map((user, index) => (rows[index] = user));
  }

  const handleSelect = (e, id) => {
    setselectedRows([...selectedRows, id]);
  };

  const getEditableStatus = (id) => {
    const res = Editable.length > 1 ? Editable.filter((status) => status.id === id) : Editable[0]
    console.log(res.editable)
    return res;
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
                <td contentEditable={getEditableStatus(row.id)}>{row.name}</td>
                <td contentEditable={getEditableStatus(row.id)}>{row.email}</td>
                <td contentEditable={getEditableStatus(row.id)}>{row.role}</td>
                <td>
                  <ActionButtons index={row.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
