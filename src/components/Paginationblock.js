import React from "react";
import { Pagination, Stack, PaginationItem } from "@mui/material";
import {
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector
} from '@mui/x-data-grid'

function Paginationblock() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);


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
