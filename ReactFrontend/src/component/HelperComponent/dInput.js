import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 }
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Interval Days" inputProps={ariaLabel}/>
      <Input placeholder="Keywords" inputProps={ariaLabel} />
      <Button variant="contained">Search</Button>
    </Box>
  );
}