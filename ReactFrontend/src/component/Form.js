import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open, setOpen, setS, s}) {
    const [name, setName] = React.useState("");
    const handleName = (e) => {
        setName(e.target.value);
    }
    const [times, settimes] = React.useState("");
    const handleTimes = (e) => {
        settimes(e.target.value);
    }
    const [fun, setFun] = React.useState("");
    const handleFun = (e) => {
        setFun(e.target.value);
    }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const happyAdd = () => {
    alert("new Sample successfully");
    setOpen(false);
    setS(s + 1);
}

const failAdd = () => {
    alert("new Sample fail");
    setOpen(false);
}

  const runNewSample = () => {
    fetch("http://localhost:3001" + "/fabcar/times?name=" + name + "&times=" + times,
        {method: 'GET',
    headers:{'Content-Type': 'application/json',}
    })
    .then(res => happyAdd())
    .catch(err => failAdd())
}

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Run new Sample</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To run new sample. Please select the times and contract function
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Sample Name"
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={handleName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Times"
            type="email"
            fullWidth
            variant="standard"
            value={times}
            onChange={handleTimes}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contract Function"
            type="email"
            fullWidth
            variant="standard"
            value={fun}
            onChange={handleFun}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={runNewSample}>Run</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
