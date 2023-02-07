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
  background: "black",
};

const Tasks = ({ allEntries, setAllEntries }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [openInfo, setOpenInfo] = useState(false);

  const handleOpenInfo = (i) => {
    setOpenInfo(true);
    setIndex(i);
  };

  const handleOpen = (i) => {
    console.log("sdfgdsfg");
    setOpen(true);
    setIndex(i);
  };

  const handleCloseInfo = () => setOpenInfo(false);
  const handleClose = () => setOpen(false);

  const handleDelete = (i) => {
    const updatedentry = allEntries.filter((_, idx) => {
      return idx !== i;
    });
    setAllEntries(updatedentry);
  };

  const handleUpdate = () => {
    setIndex(-1);
    handleClose();
  };

  const handleTitle = (e) => {
    let arr = [...allEntries];
    arr[index].title = e.target.value;
    setAllEntries(arr);
  };
  const handleAbout = (e) => {
    let arr = [...allEntries];
    arr[index].about = e.target.value;
    setAllEntries(arr);
  };
  console.log(allEntries, "UOO");
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
        {allEntries && allEntries.length ? (
          allEntries.map((entry, id) => (
            <Grid item xs={12} md={4} sm={4} key={id} className="grid-border">
              <Box className="box-content">
                <Box className="list-box">
                  <h3>
                    {entry.title.length > 20
                      ? entry.title.substring(0, 20) + "..."
                      : entry.title}
                  </h3>
                  <p>
                    {entry.about.length > 20
                      ? entry.about.substring(0, 20) + "..."
                      : entry.about}
                  </p>
                  <CloseIcon
                    id="close"
                    className="btn-css"
                    onClick={() => handleDelete(id)}
                  />
                </Box>
                <Box className="btn-display" display="flex">
                  <InfoOutlinedIcon
                    className="btn-css"
                    onClick={() => handleOpenInfo(id)}
                  />
                  <ModeEditOutlineOutlinedIcon
                    className="btn-css"
                    onClick={() => {
                      console.log("asdfsdgasdfasdfsdfasdf");
                      handleOpen(id);
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <NoTask />
        )}

        {index !== -1 && (
          <Modal open={openInfo} onClose={handleCloseInfo}>
            <Box sx={styletext}>
              <textarea
                className="textarea1"
                value={allEntries[index].title}
              ></textarea>
              <textarea
                className="textarea2"
                value={allEntries[index].about}
              ></textarea>
            </Box>
          </Modal>
        )}

        {index !== -1 && (
          <Modal open={open} onClose={handleClose}>
            <Box sx={styletext}>
              <textarea
                className="textarea1"
                onChange={(e) => handleTitle(e)}
                value={allEntries[index].title}
              ></textarea>
              <textarea
                className="textarea2"
                onChange={(e) => handleAbout(e)}
                value={allEntries[index].about}
              ></textarea>
              <button className="btn-css" onClick={() => handleUpdate()}>
                Save
              </button>
            </Box>
          </Modal>
        )}
      </Grid>
    </Box>
  );
};

export default Tasks;