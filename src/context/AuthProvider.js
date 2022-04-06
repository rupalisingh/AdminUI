import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState([{}]);
  const [currentSearchText, setCurrentSearchedText] = useState("");
  const [selectedRows, setselectedRows] = useState([])
  const [filteredUserData, setfilteredUserData] = useState([{}])
  const [check,setcheck] = useState(false)

  const getData = async () => {
    let res = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    return res.data;
  };

  useEffect(() => {
    (async () => {
      let data = await getData();
      let editable = "false"
      let isChecked = false
      let DatawithEditStatus = data.map(user => [{...user, editable, isChecked}])
      setUserData(DatawithEditStatus);
    })();
  }, []);

  const value = {
    userData,
    currentSearchText,
    selectedRows,
    filteredUserData,
    check,
    setUserData,
    setCurrentSearchedText,
    setselectedRows,
    setfilteredUserData,
    setcheck
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
