import React from "react";
import { TextField} from "@mui/material";
import "../css/Main.css";
import Table from "./Table";

function Main() {
  return (
    <>
      <div className="Search_bar">
        <TextField
          className="outlined-basic"
          placeholder="Search By Name, Email or Role"
        />
        <div className="table">

        <Table/>
        </div>
      </div>
    </>
  );
}

export default Main;
