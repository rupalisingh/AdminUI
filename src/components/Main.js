import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import "../css/Main.css";
import Table from "./Table";
import { AuthContext } from "../context/AuthProvider";

function Main() {
  const { userData, setUserData, setCurrentSearchedText, selectedRows } = useContext(
    AuthContext
  );
  const handleChange = (e) => {
    let val = e.target.value;
    setCurrentSearchedText(val);
  };

  const handleDelete = () => {
    let newUserData = userData.filter((user) => !selectedRows.includes(user.id));
    console.log(selectedRows)
    console.log(newUserData)
    setUserData(newUserData)
  };
  return (
    <>
      {userData.length > 1 || userData.length === 0 ? (
        <>
          <div className="Search_bar">
            <TextField
              className="outlined-basic"
              placeholder="Search By Name, Email or Role"
              onChange={handleChange}
            />
            <div className="table">
              <Table />
            </div>
            <div className="footer">
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete Selected
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>Loading Page...</div>
      )}
    </>
  );
}

export default Main;
