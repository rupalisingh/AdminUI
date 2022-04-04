import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../context/AuthProvider";

const columns = [
//   { field: "id", headerName: "ID", width: 70, sortable: false },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "role",
    headerName: "Role",
    type: "number",
    width: 300,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "Actions",
    headerName: "Actions",
    sortable: false,
    width: 300,
    headerAlign: "center",
  },
];

export default function Table() {
  const { userData, currentSearchText } = useContext(AuthContext);
  let rows = [];
  if(currentSearchText === ''){
    userData.map((user, index) => (rows[index] = user)) 
  }else{
      let val = currentSearchText.toLowerCase()
      let filteredArr = []
      filteredArr = userData.filter(user => user.name.toLowerCase().includes(val) || user.email.toLowerCase().includes(val) || user.role.toLowerCase().includes(val))
      filteredArr.map((user, index) => rows[index] = user)
  }

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
