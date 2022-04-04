import React from "react";
import { Pagination, Stack } from "@mui/material";


function Paginationblock() {
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
      </Stack>
    </div>
  );
}

export default Paginationblock;
