import React, {useContext} from "react";
import { TextField } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";


function Search() {
const {setCurrentSearchedText} = useContext(AuthContext)
    const handleChange = (e) => {
        let val = e.target.value;
        console.log(val)
        setCurrentSearchedText(val);
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
