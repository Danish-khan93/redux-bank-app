const initialBankState = {
  amount: 0,
  isLoading:false,
};

export const bankReducer = (state = initialBankState, action: any) => {
  switch (action.type) {
    case "account/accountDeposit":
      return {
        ...state,
        amount: state.amount + action.payload,
        isLoading:false
      };
case "account/accountWithdraw":
    return {
        ...state,
        amount: state.amount - action.payload
    }
    case "account/accountDepositLoading":
        return{
            ...state,
            isLoading:true
        }
    default:
      return state;
  }
};
