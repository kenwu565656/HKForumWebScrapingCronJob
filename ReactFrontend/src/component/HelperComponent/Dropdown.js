import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({type, setType}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Forum</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Data"
          onChange={handleChange}
        >
          <MenuItem value={"lihkg"}>Lihkg</MenuItem>
          <MenuItem value={"golden"}>Golden</MenuItem>
          <MenuItem value={"babyKingdom"}>BabyKingdom</MenuItem>
          <MenuItem value={"babyDiscuss"}>BabyDiscuss</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}