import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { categoryList } from '../constant/category';

export default function CategoryDropDown({type, setType}) {
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Data"
          onChange={handleChange}
        >
            {
                categoryList["Lihkg"].map((values, index) => {
                    return(
                        <MenuItem value={values} key={index}>{values}</MenuItem>
                )
                })
            }
        </Select>
      </FormControl>
    </Box>
  );
}