import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { lihkgMapping } from "../../constant/category";


const NewCronJobForm = ({ open, setOpen, pforum, pcategory, penddate }) => {
    const [forum, setForum] = useState(pforum);
    const [category, setCategory] = useState(pcategory);
    const [enddate, setEnddate] = useState(penddate);

    useEffect(() => {
        setForum(pforum);
        setCategory(pcategory);
        setEnddate(penddate);
    },[pforum, pcategory, penddate]);

    const handleAddCronJob = () => {
        fetch("http://localhost:8080" + "/cronjob/add",
        {method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({forum: forum, category: lihkgMapping[category], enddate: enddate})
    })
    .then(res => happyAdd())
    .catch(err => failAdd(err))
}

    const happyAdd = () => {
        toast.success("Created new CronJob",{position: toast.POSITION.TOP_CENTER});
        setOpen(false);
    }

    const failAdd = (err) => {
        toast.error("Fail to create new CronJob",{position: toast.POSITION.TOP_CENTER});
        console.log(err);
    }


    return(
        <div>
        <Dialog open={open}>
            <DialogTitle>
                New Cron Job
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus fullWidth label="Forum" placeholder="Forum" value={forum} onChange={(event) => setForum(event.target.value)} disabled/>
                <TextField autoFocus fullWidth label="Category" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)} disabled/>
                <TextField fullWidth label="End Date" placeholder="End Date" value={enddate} onChange={(event) => setEnddate(event.target.value)} disabled/>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={() => handleAddCronJob()}>Confirm</Button>
                <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
        <ToastContainer autoClose={1000} />
        </div>
    )
}

export default NewCronJobForm;