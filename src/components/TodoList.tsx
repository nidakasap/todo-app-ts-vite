import { FC } from "react";
import {  Box } from "@mui/material";
import ItemList from "./ItemList";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}

const TodoList: FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  const todoTypes = [
    { type: 'progress', todos: progressTodos, label: 'In Progress Todo' },
    { type: 'completed', todos: completedTodos, label: 'Completed Todo' }
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: isSmallScreen ? "column" : "row",
      mt: 3,
    }}
  >
      {todoTypes.map((todoType) => (
        <ItemList
          key={todoType.type}
          todos={todoType.todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          label={todoType.label}
        />
      ))}
    </Box>
  );
};

export default TodoList;
