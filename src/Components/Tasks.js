import React, { useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import NoTask from "./Features/NoTask";
import "./Todo.css";

const styletext = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #ff8303",
  borderRadius: "4px",
  width: "400px",
  height: "400px",
  background: "black"
};

const Tasks = ({ allEntries, setAllEntries }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [openInfo, setOpenInfo] = useState(false);
  const val1 = title.substring(0, 20);
  const val2 = about.substring(0, 20);
  
  const handleOpenInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (index) => {
    const updatedentry = allEntries.filter((_, idx) => {
      return idx !== index;
    });
    setAllEntries(updatedentry);
  };

  const handleUpdate = (index) => {
    allEntries.map((e, idx) => {
      if (idx === index) {
        e.title = title;
        e.about = about;
      }
    });
    setAllEntries(allEntries);
    handleClose();
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAbout = (e) => {
    setAbout(e.target.value);
  };



  return (
    <Box className="all-tasks">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="grid-container"
        columns={12}
        spacing={4}
      >
        {(allEntries && allEntries.length)?allEntries.map((entry, index) => (
          <Grid item xs={12} md={4} sm={4} key={index} className="grid-border">
            <Box className="box-content">
              <Box className="list-box">
                <h3>{entry.title.length>20 ? entry.title.substring(0, 20) + "..." : entry.title}</h3>
                <p>{entry.about.length>20 ? entry.about.substring(0, 20) + "..." : entry.about}</p>
                <CloseIcon
                  id="close"
                  className="btn-css"
                  onClick={() => handleDelete(index)}
                />
              </Box>
              <Box className="btn-display" display="flex">
                <InfoOutlinedIcon className="btn-css" onClick={handleOpenInfo}/>
                
                <Modal open={openInfo} onClose={handleCloseInfo}>
                  <Box sx={styletext}>
                    <textarea
                      className="textarea1"
                      value={entry.title}
                    ></textarea>
                    <textarea
                      className="textarea2"
                      value={entry.about}
                    ></textarea>
                  </Box>
                </Modal>

                <ModeEditOutlineOutlinedIcon
                  className="btn-css"
                  onClick={handleOpen}
                />
                <Modal open={open} onClose={handleClose}>
                  <Box sx={styletext}>
                    <textarea
                      className="textarea1"
                      onChange={(e) => handleTitle(e)}
                      // value={entry.title}
                    ></textarea>
                    <textarea
                      className="textarea2"
                      onChange={(e) => handleAbout(e)}
                      // value={entry.about}
                    ></textarea>
                    <button
                      className="btn-css"
                      onClick={() => handleUpdate(index)}
                    >
                      Save
                    </button>
                  </Box>
                </Modal>
              </Box>
            </Box>
          </Grid>
        )):
      (
     
          <NoTask/>
      )}
      </Grid>
    </Box>
  );
};

export default Tasks;
