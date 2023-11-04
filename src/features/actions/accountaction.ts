export const accountDeposit = (ammountDeposit: number, currency: string) => {
  if (currency === "USD")
    return {
      type: "account/accountDeposit",
      payload: ammountDeposit,
    };
    //@ts-ignore
  return async function (dispatch: any, getState: any) {
    dispatch({
        type: "account/accountDepositLoading",
      payload: ammountDeposit,

    })
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${ammountDeposit}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converte = data.rates.USD;
    dispatch({
      type: "account/accountDeposit",
      payload: converte,
    });
  };
};
export const accountWithdraw = (ammountWithDraw: number) => {
  return {
    type: "account/accountWithdraw",
    payload: ammountWithDraw,
  };
};
