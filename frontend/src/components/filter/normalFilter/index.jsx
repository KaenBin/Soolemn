// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

// import mock_categories from "@/mockdata/categories";
// import { getListName } from "@/utils/utils";

// const filterOptions = createFilterOptions({
//   matchFrom: "start",
//   stringify: (option) => option.name,
// });

// export default function NormalFilter(props) {
//   return (
//     <Autocomplete
//       id="filter-demo"
//       size="small"
//       value={props.value}
//       onChange={(event, newValue) => {
//         props.setValue(newValue);
//       }}
//       options={props.list}
//       getOptionLabel={(option) => option.value}
//       filterOptions={filterOptions}
//       sx={{ width: "20vw" }}
//       renderInput={(params) => <TextField {...params} label={props.type} />}
//     />
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function NormalFilter(props) {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          defaultValue={props.value}
          label="Order"
          onChange={handleChange}
        >
          {props.list.map((item) => (
            <MenuItem value={item.value}>{item.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
