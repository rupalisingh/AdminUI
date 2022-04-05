import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState([{}]);
  const [currentSearchText, setCurrentSearchedText] = useState("");

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
    // console.log(userData)
  }, []);

  const value = {
    userData,
    currentSearchText,
    setCurrentSearchedText
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
