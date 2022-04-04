import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../context/AuthProvider";

const columns = [
  { field: "id", headerName: "ID", width: 70, sortable: false },
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
  const { userData } = useContext(AuthContext);
  let rows = [];
  userData.map((user, index) => (rows[index] = user));
  //   console.log(userData.id)
  //   const getRow = () => {
  //     //   console.log(userData);
  //     userData.map((user) => {
  //       return user;
  //     });
  //   };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        // getRowId = {rows => console.log("Row" + rows.id)}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
