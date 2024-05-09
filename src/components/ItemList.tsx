import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import { FC } from "react";
import "./styles.css"
interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
  label: string;
}

const ItemList: FC<ITodoList> = ({ todos, toggleTodo, deleteTodo, label }) => {
  return (
    <Grid
      container
      xs={12}
      md={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        className="title"
        color={label === "In Progress Todo" ? "error" : "primary"}
        align="center"
        variant="h4"
        padding="1rem"
      >
        {label}
      </Typography>
      <Grid
        item
        position={"relative"}
        className={label === "In Progress Todo" ? "myscrool scrool-progress" : "myscrool scrool-completed"}
        sx={{
          border: `0.5px solid ${label === "In Progress Todo" ? "red" : "blue"}`,
          borderRadius: "0.5rem",
          minHeight: "400px",
          maxHeight: "400px",
          overflow: "auto",
          width: "90%",
        }}
      >
        {todos.length ? (
          todos.map((todo) => (
            <TodoListItem
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
              todo={todo}
            />
          ))
        ) : (
          <Typography  mt={1} padding="1rem">
            No {label}!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ItemList;
