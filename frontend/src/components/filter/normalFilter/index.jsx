import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import mock_categories from "@/mockdata/categories";
import { getListName } from "@/utils/utils";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.name,
});

export default function NormalFilter(props) {
  return (
    <Autocomplete
      id="filter-demo"
      size="small"
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      options={props.list}
      getOptionLabel={(option) => option.value}
      filterOptions={filterOptions}
      sx={{ width: "20vw" }}
      renderInput={(params) => <TextField {...params} label={props.type} />}
    />
  );
}
