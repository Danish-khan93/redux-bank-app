import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
const WellComeConsumer = () => {
  const customer = useSelector((store: any) => store.consumer.name);
  return <Typography variant="h3" >WellCome {customer} </Typography>;
};

export default WellComeConsumer;
