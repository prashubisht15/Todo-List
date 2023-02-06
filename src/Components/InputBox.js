import { Box } from '@mui/material'
import React from 'react'
import './Todo.css'
import AddIcon from '@mui/icons-material/Add';
const InputBox = () => {
  return (
    <Box className="top-container">
        <Box>
            <input type="text" className="input-box first"/>
            <input type="text" className="input-box second"/>
        </Box>
            <Box className="add-btn">
                <AddIcon id='plus-icon'/>
            </Box>
    </Box>
  )
}

export default InputBox