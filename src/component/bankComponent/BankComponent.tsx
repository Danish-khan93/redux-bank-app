import { Typography, TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  accountDeposit,
  accountWithdraw,
} from "../../features/actions/accountaction";
import {Select,MenuItem} from "@mui/material"
const BankComponent = () => {
    const [currency,setCurrency] =useState("dollar")
  const [deposit, setDeposit] = useState(0);
  const [withDraw, setWithDraw] = useState(0);

  const select = useSelector((store: any) => store.bank.amount);
  const dispatch = useDispatch();
  const depositHandler = () => {
    if (!deposit) return;
    //@ts-ignore
    dispatch(accountDeposit(deposit,currency));
    setDeposit(0);
  };

  const withDrawHandler = () => {
    dispatch(accountWithdraw(withDraw));
    setWithDraw(0);
  };

  return (
    <Box>
      <Typography variant="h3">Amount in account ${select}</Typography>
      <Box>
        <TextField
          value={deposit}
          onChange={(e) => {
            setDeposit(+e.target.value);
          }}
        />
            <Select value={currency} onChange={(e)=>{setCurrency(e.target.value)}}>
    <MenuItem value={"USD"}>US Dollar</MenuItem>
    <MenuItem value={"EUR"}>Euro</MenuItem>
    <MenuItem value={"PKR"}>pakistan</MenuItem>
    <MenuItem value={"IND"}>Indian</MenuItem>
    </Select>
        <Button onClick={depositHandler}>Deposit</Button>
      </Box>
      <Box>
        <TextField
          value={withDraw}
          onChange={(e) => {
            setWithDraw(+e.target.value);
          }}
        />{" "}
        <Button onClick={withDrawHandler}>WithDraw</Button>
      </Box>
    </Box>
  );
};

export default BankComponent;
