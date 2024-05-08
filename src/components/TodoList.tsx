import  { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import TodoListItem from './TodoListItem';

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}

const TodoList: FC<ITodoList> = ({ todos,toggleTodo,deleteTodo }) => {
  const progressTodos = todos.filter(todo => !todo.isDone);
  const completedTodos = todos.filter(todo => todo.isDone);

  return (
    <Grid container sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        mt:3,
        gap:"0.5rem"
    }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography className="title" color="secondary" align="center" variant="h4">
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Progress Todos!
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography className="title" sx={{color:"green"}} align="center" variant="h4">
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
