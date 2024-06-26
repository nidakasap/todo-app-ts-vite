import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
interface IAddTodoComp {
     addTodo:AddFn;
  }
  
  const AddTodoComp = ({addTodo}:IAddTodoComp) => {
    const [text,setText] = useState("")
    const handleClick = () =>{
        console.log(text)
        addTodo(text)
        setText("")    
      }

  return (
    <Box
      sx={{          
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="secondary"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        inputProps={{ maxLength: 40 }}
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<SaveIcon />}
        disabled={!text.trim()}
        onClick={handleClick}
      >
        Save Todo
      </Button>
    </Box>
  )
}

export default AddTodoComp