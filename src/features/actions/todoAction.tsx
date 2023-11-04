export const addTodo = (task:string) => {
  return {
    type: "addTodo/event",
    payload: {
        todotask:task,
        id: Date.now(),
        completedAt: false
    }
  };
};

export const delTodo =(id:number)=>{
  return{
    type:"delTodo/event",
    payload :id
  }
}
