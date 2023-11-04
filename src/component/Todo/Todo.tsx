import { Box, Typography, TextField, Button } from "@mui/material";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,delTodo } from "../../features/actions/todoAction";
const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store: any) => store.todo);
  const todoRef = useRef<any>("");

  const addTodoHandle = () => {
    const todoadding = todoRef.current.value;
    dispatch(addTodo(todoadding));
    todoRef.current.value = "";
  };

const deleteHandle =(id:number)=>{
  dispatch(delTodo(id))
}

  return (
    <>
      <Box className="bg-slate-800">
        <Typography variant="h2" className="text-white text-center pt-3 pb-3">
          Core Redux Practice
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h2"
          className="text-[#003b6d] font-bold text-center pt-3 pb-3"
        >
          Todos
        </Typography>
      </Box>
      <Box className="flex justify-center">
        <TextField size="small" inputRef={todoRef} />
        <Button
          onClick={addTodoHandle}
          className="bg-[#003b6d] text-white hover:bg-[#00eeff]"
        >
          Add Task
        </Button>
      </Box>
      <Box>
        {todoList.taskList.map((value: any) => {
          return (
            <Box key={value.id} className="flex justify-center items-center gap-10">
              <Typography>{value.todotask}</Typography>
              <Box>
                <Button onClick={()=>deleteHandle(value.id)}>delete</Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Todo;
