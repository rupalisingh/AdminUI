import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState([{}]);
  const [currentSearchText, setCurrentSearchedText] = useState("");
  const [selectedRows, setselectedRows] = useState([])
  const [filteredRows, setFilteredRows] = useState([{}])
  const [Editable, setEditable] = useState([{id : -1, editable : "false"}])

  const getData = async () => {
    let res = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    return res.data;
  };

  useEffect(() => {
    (async () => {
      let data = await getData();
      setUserData(data);
    })();
    console.log(userData)
  }, []);

  const value = {
    userData,
    currentSearchText,
    selectedRows,
    filteredRows,
    Editable,
    setUserData,
    setCurrentSearchedText,
    setselectedRows,
    setFilteredRows,
    setEditable
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
