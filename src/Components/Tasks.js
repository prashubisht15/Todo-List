import React from "react";
import { Box, Grid } from "@mui/material";
import "./Todo.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
const Tasks = () => {
  return (
    <Box className="all-tasks">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4} sm={4}>
          <Box className="list-box">
            <h3>hey there</h3>
            <p>loremsadfasdfasdfasdfe</p>
            <CloseIcon id="close" className="btn-css"/>
          </Box>
          <Box className="btn-display" display="flex">
            <InfoOutlinedIcon className="btn-css"/>
            <ModeEditOutlineOutlinedIcon className="btn-css"/>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Tasks;
