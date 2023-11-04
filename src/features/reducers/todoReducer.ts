const initialState = {
  taskList: [],
};

// @ts-ignore
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo/event":
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };

      
      case "delTodo/event":
        const filterdList =  state.taskList.filter((value:any)=> {
          return value.id !== action.payload
        })
        return {
          ...state,
        taskList : filterdList

        } 
     
    default:
      return state;
  }
};
