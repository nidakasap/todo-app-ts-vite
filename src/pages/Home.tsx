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
      //const addTodo = async (text:string)
      type AddFn = (text: string) => Promise<void>;

      const addTodo: AddFn = async (text) => {
        try {
          const {data} = await axios.post<ITodoType>(url, { task: text, isDone: false });
            getTodos()
          setTodos([...todos, data]);
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
        <AddTodoComp addTodo={addTodo} />
        <TodoList />
        </Container>
  )
}

export default Home
