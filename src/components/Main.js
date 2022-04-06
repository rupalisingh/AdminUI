import React, { useContext } from "react";
import { Button, Pagination } from "@mui/material";
import "../css/Main.css";
import Table from "./Table";
import Search from "./Search";
import { AuthContext } from "../context/AuthProvider";
import usePagination from "../CustomHook/usePagination";

function Main() {
  const Items_per_page = 10;
  const { userData, setUserData, selectedRows, filteredUserData, currentSearchText  } = useContext(AuthContext);

  const {
    currentPage,
    getCurrentData,
    setCurrentPage,
    pageCount,
  } = usePagination(currentSearchText === ""? userData : filteredUserData, Items_per_page);

  const handleDelete = () => {
    let newUserData = userData.filter(
      (user) => !selectedRows.includes(user[0].id)
    );
    setUserData(newUserData);
  };
  return (
    <>
      {userData.length > 1 || userData.length === 0 ? (
        <>
          <Search />
          <div className="table">
            <Table rows = {getCurrentData()}/>
          </div>
          <div className="footer">
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete Selected
            </Button>
            <Pagination
              shape="rounded"
              variant="outlined"
              count={pageCount} // Total No of Pages
              defaultPage={1}
              page={currentPage} // Current Page
              onChange={(_, newPage) => setCurrentPage(newPage)}
              showFirstButton
              showLastButton
            />
          </div>
        </>
      ) : (
        <div>Loading Page...</div>
      )}
    </>
  );
}

export default Main;
