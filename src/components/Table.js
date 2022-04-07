import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Checkbox, TextField } from "@mui/material";
import ActionButtons from "./ActionButtons";
import "../css/Table.css";

export default function Table(props) {
  const {
    userData,
    setselectedRows,
    selectedRows,
    setUserData,
    setcheck,
    check,
  } = useContext(AuthContext);

  const handleSelect = (e, id) => {
    const getIdx = userData.findIndex((user) => user[0].id === id);
    let cloneduserData = userData.map((user) => user);
    cloneduserData[getIdx][0].isChecked = true;
    setUserData(cloneduserData);
    setselectedRows([...selectedRows, id]);
  };

  const handleSelectAll = () => {
    check ? setcheck(false) : setcheck(true);
    // Since setCheck will uppdate asynchronusly, latest value will be opposite
    let cloneids = props.rows.map((row) => row[0].id);
    if (check === false) {
      // eslint-disable-next-line
      userData.map(function(user) {
        props.rows.map((row) =>
          user[0].id === row[0].id ? (user[0].isChecked = true) : <></>
        );
      });
      setselectedRows([...selectedRows, ...cloneids]);
    } else {
      // eslint-disable-next-line
      userData.map(function(user) {
        props.rows.map((row) =>
          user[0].id === row[0].id ? (user[0].isChecked = false) : <></>
        );
      });
      let arr = selectedRows.filter((id) => !cloneids.includes(id));
      setselectedRows(arr);
    }
  };

  const handleNameChange = (e, defaultValue) => {
    let val = e.target.value;
    let index = userData.findIndex((user) => user[0].name === defaultValue);
    // console.log(res)
    userData[index][0].name = val;
  };

  const handleEmailChange = (e, defaultValue) => {
    let val = e.target.value;
    let index = userData.findIndex((user) => user[0].email === defaultValue);
    // console.log(res)
    userData[index][0].email = val;
  }

  const handleRoleChange = (e, defaultValue) => {
    let val = e.target.value;
    let index = userData.findIndex((user) => user[0].role === defaultValue);
    // console.log(res)
    userData[index][0].role = val;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox key={-1} checked={check} onChange={handleSelectAll} />
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
                {row[0].editable === "true" ? (
                  <>
                    <td>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        defaultValue={row[0].name}
                        onChange={(e) =>
                          handleNameChange(e, row[0].name)
                        }
                      />
                    </td>
                    <td>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        defaultValue={row[0].email}
                        onChange={(e) =>
                          handleEmailChange(e, row[0].email)
                        }
                      />
                    </td>
                    <td>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        defaultValue={row[0].role}
                        onChange={(e) =>
                          handleRoleChange(e, row[0].role)
                        }
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td contentEditable={row[0].editable}>{row[0].name}</td>
                    <td contentEditable={row[0].editable}>{row[0].email}</td>
                    <td contentEditable={row[0].editable}>{row[0].role}</td>
                  </>
                )}

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
