import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import {useSnackbar} from 'notistack'
import Gyizer from "./Features/Gyizer"
import Tasks from "./Tasks";
import "./Todo.css";

const styletext = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #ff8303",
  borderRadius: "4px",
  width: "300px",
  height: "300px",
};

const getLocalData = ()=>{
  return (JSON.parse(localStorage.getItem('entries')) || [])
}

const InputBox = () => {
  const {enqueueSnackbar} = useSnackbar()
  const [allEntries, setAllEntries] = useState(getLocalData())
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const trimmedField1 = field1.substring(0, 20);
  const trimmedField2 = field2.substring(0, 20);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const handleSubmit = () => {
    if(field1==='' || field2==='') 
    {
      enqueueSnackbar("Enter both field", { variant: "error" })
    }
    else{
      const entries = {
        title: field1,
        about: field2,
      }
      setAllEntries([...allEntries, entries])
      setField1("");
      setField2("");
    }
  };
  
  useEffect(()=>{
    localStorage.setItem('entries', JSON.stringify(allEntries))
  },[allEntries])

  return (
    <>
    <Gyizer className="logo"/>
    <Box className="top-container">
      <Box >
        <input
          type="text"
          placeholder="  Title..."
          className="input-box first"
          onChange={(e) => {
            setField1(e.target.value);
          }}
          value={field1.length > 15 ? trimmedField1 + "..." : field1}
        />
        <input
          onClick={handleOpen}
          placeholder=" About..."
          className="input-box second"
          value={field2.length > 15 ? trimmedField2 + "..." : field2}
        />
        <Modal open={open} onClose={handleClose}>
          <Box sx={styletext}>
            <textarea
              className="textarea"
              onChange={(e) => {
                setField2(e.target.value);
              }}
            ></textarea>
          </Box>
        </Modal>
      </Box>
      <Box className="add-btn" onClick={handleSubmit}>
        <AddIcon id="plus-icon" />
      </Box>
    </Box>
    <Tasks allEntries={allEntries} setAllEntries={setAllEntries}/>
    </>
  );
};
export default InputBox;