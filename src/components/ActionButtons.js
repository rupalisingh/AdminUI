import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function ActionButtons(props) {
  const { setUserData, userData} = useContext(
    AuthContext
  );

  const handleDeleteRow = (e, id) => {
    let newUserData = userData.filter((user) => user[0].id !== id);
    setUserData(newUserData);
  };

  const handleEdit = (id) => {
    let clonedUserData = userData.map(user => user)
    clonedUserData[props.index][0].editable = "true"
    // console.log("cloneduserDtaa" ,clonedUserData)
    setUserData(clonedUserData)

    
  };

  const handleSave = (id) => {
    let clonedUserData = userData.map(user => user)
    clonedUserData[props.index][0].editable = "false"
    // console.log("cloneduserDtaa" ,clonedUserData)
    setUserData(clonedUserData)
  };
  return (
    <>
      <div>
        {userData[props.index][0].editable === "true" ? (
          <i
            class="fa fa-floppy-o"
            aria-hidden="true"
            onClick={() => handleSave(props.id)}
          ></i>
        ) : (
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={() => handleEdit(props.id)}
          ></i>
        )}
        <i
          className="fa fa-trash"
          onClick={(e) => handleDeleteRow(e, props.id)}
        ></i>
      </div>
    </>
  );
}

export default ActionButtons;
