import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";

function Search() {
  const { setCurrentSearchedText, userData, setUserData, setfilteredUserData } = useContext(
    AuthContext
  );

  const filterUserData = (val) => {
      console.log(userData)
      let filteredArr = []
      filteredArr = userData.filter(
        (user) =>
          user[0].name.toLowerCase().includes(val) ||
          user[0].email.toLowerCase().includes(val) ||
          user[0].role.toLowerCase().includes(val)
      );
    console.log(filteredArr)
    setfilteredUserData(filteredArr)
  };

  const handleChange = (e) => {
    let val = e.target.value;
    val = val.toLowerCase()
    setCurrentSearchedText(val);
    filterUserData(val)
  };

  return (
    <>
      <div className="Search_bar">
        <TextField
          className="outlined-basic"
          placeholder="Search By Name, Email or Role"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Search;
