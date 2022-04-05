import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function ActionButtons(props) {
  const { setUserData, userData, setEditable, Editable } = useContext(
    AuthContext
  );
  let arr = Editable.length > 1 ? Editable.filter(row => row.id === props.index) : Editable
  console.log(arr[0].editable)
  const handleDeleteRow = (e, id) => {
    let newUserData = userData.filter((user) => user.id !== id);
    setUserData(newUserData);
  };

  const handleEdit = (id) => {
    setEditable([...Editable, {id : id, editable : "true"}]);
  };

  const handleSave = (id) => {
    setEditable([...Editable, {id : id, editable : "false"}])
  }
  return (
    <div>
      {console.log(arr[0].editable)}
      {arr[0].editable === "true" ? (
        <i class="fa fa-floppy-o" aria-hidden="true" onClick={handleSave(props.index)}></i>
      ) : (
        <i className="fa fa-pencil" aria-hidden="true" onClick={handleEdit(props.index)}></i>
      )}
      <i
        className="fa fa-trash"
        onClick={(e) => handleDeleteRow(e, props.index)}
      ></i>
    </div>
  );
}

export default ActionButtons;
