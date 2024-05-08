import {Container,Typography} from "@mui/material"
import AddTodoComp from "../components/AddTodoComp"
import TodoList from "../components/TodoList"

const Home = () => {
  return (
    <Container>
        <Typography align="center" color="error" variant="h5" component="h1">
            ToDo App with TypeScript
        </Typography>
        <AddTodoComp/>
        <TodoList/>
        </Container>
  )
}

export default Home