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

  const handleEdit = () => {
    let clonedUserData = userData.map(user => user)
    clonedUserData[props.index][0].editable = "true"
    setUserData(clonedUserData)
  };

  const handleSave = () => {
    let clonedUserData = userData.map(user => user)
    clonedUserData[props.index][0].editable = "false"
    setUserData(clonedUserData)
  };
  return (
    <>
      <div>
        {userData[props.index][0].editable === "true" ? (
          <i
            className="fa fa-floppy-o"
            aria-hidden="true"
            onClick={handleSave}
          ></i>
        ) : (
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={handleEdit}
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
