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
      <Input placeholder="tx_id" inputProps={ariaLabel}/>
      <Input placeholder="block Number" inputProps={ariaLabel} />
      <Input placeholder="Chaincode" inputProps={ariaLabel} />
      <Input placeholder="Function" inputProps={ariaLabel} />
      <Input placeholder="Args" inputProps={ariaLabel} />
      <Input placeholder="Submiter" inputProps={ariaLabel} />
      <Button variant="contained">Search</Button>
    </Box>
  );
}


