import React, {useContext} from "react";
import { Pagination, Stack, PaginationItem } from "@mui/material";
import {
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector
} from '@mui/x-data-grid'
import { AuthContext } from "../context/AuthProvider";

function Paginationblock() {
  const {filteredRows, userData} = useContext(AuthContext)
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    // let pageCount
    // if(filteredRows.length == 0){
    //    pageCount = userData.length / 10
    //    console.log(userData)
    // }else{
    //    pageCount = filteredRows.length % 10
    // }
    // console.log(pageCount)


  return (
    <div>
      <Stack spacing={2}>
      <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
      showFirstButton showLastButton
    
        />
      </Stack>
    </div>
  );
}

export default Paginationblock;
