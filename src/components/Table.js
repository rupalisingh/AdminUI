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
    setcheck,
    check,
  } = useContext(AuthContext);


  const handleSelect = (e, id) => {
    const getIdx = userData.findIndex(user => user[0].id === id)
    let cloneduserData = userData.map(user => user)
    cloneduserData[getIdx][0].isChecked = true
    setUserData(cloneduserData)
    setselectedRows([...selectedRows, id]);
  };

  
  const handleSelectAll = () => {
    check ? setcheck(false) : setcheck(true)
    // Since setCheck will uppdate asynchronusly, latest value will be opposite 
    let cloneids = props.rows.map(row => row[0].id)
    if(check === false){
      userData.map(function(user){
        props.rows.map(row => user[0].id === row[0].id ? user[0].isChecked = true : <></>)
      })
      setselectedRows([...selectedRows, ...cloneids])
    }else{
      userData.map(function(user){
        props.rows.map(row => user[0].id === row[0].id ? user[0].isChecked = false : <></>)
      })
      let arr = selectedRows.filter(id => !cloneids.includes(id))
      setselectedRows(arr)
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox
                key={-1}
                checked={check}
                onChange = {handleSelectAll}
              />
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
                    checked={row[0].isChecked}
                    onChange={(e) => handleSelect(e, row[0].id)}
                  />
                </td>
                <td contentEditable={row[0].editable}>{row[0].name}</td>
                <td contentEditable={row[0].editable}>{row[0].email}</td>
                <td contentEditable={row[0].editable}>{row[0].role}</td>
                <td>
                  <ActionButtons id={row[0].id} index={index} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
