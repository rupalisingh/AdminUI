import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Checkbox } from "@mui/material";
import ActionButtons from "./ActionButtons";
import "../css/Table.css";

export default function Table(props) {
  const {
    userData,
    currentSearchText,
    setselectedRows,
    selectedRows,
    setUserData,
    
  } = useContext(AuthContext);


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
          {props.rows.map((row, index) => {
            return (
              <tr key={row[0].id}>
                <td>
                  <Checkbox
                    key={row[0].id}
                    onChange={(e) => handleSelect(e, row[0].id)}
                  />
                </td>
                <td contentEditable = {row[0].editable}>{row[0].name}</td>
                <td contentEditable = {row[0].editable}>{row[0].email}</td>
                <td contentEditable = {row[0].editable}>{row[0].role}</td>
                <td>
                  <ActionButtons id={row[0].id} index = {index} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
