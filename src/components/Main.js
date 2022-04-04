import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import "../css/Main.css";
import Table from "./Table";
import Paginationblock from "./Paginationblock";
import { AuthContext } from "../context/AuthProvider";

function Main() {
  const { userData } = useContext(AuthContext);
  // console.log(userData)
  return (
    <>
      {userData.length > 1 ? (
        <>
          <div className="Search_bar">
            <TextField
              className="outlined-basic"
              placeholder="Search By Name, Email or Role"
            />
            <div className="table">
              <Table />
            </div>
            <div className="footer">
              <Button variant="contained" color="error">
                Delete Selected
              </Button>
              <Paginationblock />
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
