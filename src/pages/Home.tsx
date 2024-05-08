import {Container,Typography} from "@mui/material"
import AddTodoComp from "../components/AddTodoComp"
import TodoList from "../components/TodoList"
import { useEffect, useState } from "react"
import axios from "axios";

interface ITodoType {
    isDone: boolean;
    id: string | number;
    task?: string; 
  }

const url = 'https://634ac3fc5df952851418480f.mockapi.io/api/todos'

  const Home = () => {
    const [todos,setTodos] = useState<ITodoType[]>([]);

    const getTodos = async () => {
        try {
          const { data } = await axios<ITodoType[]>(url);
          setTodos(data);         
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getTodos();
      }, []);

  return (
    <Container>
        <Typography align="center" color="error" variant="h5" component="h1">
            ToDo App with TypeScript
        </Typography>
        <AddTodoComp/>
        <TodoList />
        </Container>
  )
}

export default Home
