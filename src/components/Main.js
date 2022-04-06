import React, { useContext } from "react";
import { Button } from "@mui/material";
import "../css/Main.css";
import Table from "./Table";
import Search from "./Search"
import { AuthContext } from "../context/AuthProvider";

function Main() {
  const { userData, setUserData, selectedRows } = useContext(
    AuthContext
  );
  

  const handleDelete = () => {
    let newUserData = userData.filter((user) => !selectedRows.includes(user[0].id));
    setUserData(newUserData)
  };
  return (
    <>
      {userData.length > 1 || userData.length === 0 ? (
        <>
          <Search/>
            <div className="table">
              <Table />
            </div>
            <div className="footer">
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete Selected
              </Button>
            </div>
        </>
      ) : (
        <div>Loading Page...</div>
      )}
    </>
  );
}

export default Main;
