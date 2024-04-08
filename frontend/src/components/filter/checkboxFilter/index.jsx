import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CheckboxFilter = (props) => {
  return (
    <Autocomplete
      multiple
      limitTags={3}
      size="small"
      id="checkboxes-tags-demo"
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      options={props.list}
      disableCloseOnSelect
      getOptionLabel={(option) => option.value}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.value}
        </li>
      )}
      style={{ width: "20vw" }}
      renderInput={(params) => <TextField {...params} label={props.type} />}
    />
  );
};

export default CheckboxFilter;
