import {Container,Typography} from "@mui/material"
import AddTodoComp from "../components/AddTodoComp"
import TodoList from "../components/TodoList"
import { useEffect, useState } from "react"
import axios from "axios";

const url: string = import.meta.env.VITE_BASE_URL

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
  
      const addTodo: AddFn = async (text) => {
        try {
          const {data} = await axios.post<ITodoType>(url, { task: text, isDone: false });
            getTodos()
          setTodos([...todos, data]);
        } catch (error) {
          console.log(error);
         
        }
      };

      const toggleTodo : ToggleFn = async(todo)=>{
        try {
            await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
        } catch (error) {
            console.log(error)
        }finally{
            getTodos()
        }
      }

      const deleteTodo: DeleteFn = async (id) => {
        try {
          await axios.delete(`${url}/${id}`);        
        } catch (error) {
          console.log(error);          
        } finally{
            getTodos()
        }
      };
    

      useEffect(() => {
        getTodos();
      }, []);

  return (
    <Container sx={{
      marginTop:"2rem",
      }}>
        <Typography align="center" color="secondary" variant="h4" component="h1">
            TODO LIST
        </Typography>
        <Typography align="center" color="secondary" style={{ fontSize: '.6rem' }} component="h6">
            WITH TYPESCRIPT
        </Typography>
        <AddTodoComp addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
        </Container>
  )
}

export default Home
