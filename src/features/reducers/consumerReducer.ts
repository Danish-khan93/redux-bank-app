const initalStateConsumer = {
  name: "",
  id: "",
  createdAt:""
};

export const consumerReducer = (state = initalStateConsumer, action:any) => {
  switch (action.type) {
    case "account/creation":
        
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        createdAt:  action.payload.createdAt
      };
      default:
        return state
  }
};
