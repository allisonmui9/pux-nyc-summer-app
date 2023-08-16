import { useState, useEffect } from "react";
import { Modal } from '@mui/material';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import Form from "./components/Form";
import Axios from "axios";
import Card from "./components/Card"
import { Grid } from "@mui/material";


function App() {
  const [bucketList, setBucketList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => setBucketList(response.data))
  }, [])
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <div className="app">
      {/* header */}
      <h1>NYC Summer Bucket List</h1>
      {/* button */}
      <button className="mt-24 flex" onClick={handleOpen}>
        <div><AddIcon fontSize='small'/></div>
        <p className="ml-4">Add adventure</p>
      </button>
      <Modal
        open = {open}
        onClose = {handleClose}
      >
        <div><Form handleClose={handleClose}/></div>
      </Modal>
      {/* cards */}
      <div className="mt-24">
        <Grid container spacing={4}>
          {bucketList.map((val, key) => {
            return <Grid
            item xs={12} sm={6} md={4} lg={3} key={key}>
              <Card bucketList={val}/>
            </Grid>
          })}
        </Grid>
      </div>
    </div>
  );
}

export default App;
