import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';

interface ITodoListItem extends ITodoListFn {
    todo: ITodoType;
  }
  const TodoListItem: React.FC<ITodoListItem> = ({
    todo,
    deleteTodo,
    toggleTodo,
  }) => {
    return (
        <ListItem
        disableGutters
        sx={{ padding: "0.9rem", cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" } }}
        secondaryAction={
          <IconButton
            onClick={() => deleteTodo(todo.id)}
            sx={{ "&:hover": { color:  "#292727" } }}
            aria-label="delete"
          >
            <DeleteIcon  />
          </IconButton>
        }
      >
      <Checkbox
        checked={todo.isDone}
        sx={{ cursor: "pointer" }}
        onClick={() => toggleTodo(todo)}
      />  
        <ListItemText
          sx={{ wordWrap: "break-word" }}
          primary={todo.task}
        />
      </ListItem>
  );
};

export default TodoListItem;
