import { TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createConsumerAction } from "../../features/actions/createConsumerAction";

const ConsumerDetail = () => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const clickHandel = () => {
    if (!fullName || !id) return;
    dispatch(createConsumerAction(fullName, id));
    
  };

  return (
    <Box className="flex flex-col w-[500px] justify-center gap-5">
      <Box>
        <Typography variant="h3" className="text-center">
          Create new Customer
        </Typography>
      </Box>
      <Box className="flex flex-col justify-center items-center gap-4 [w-400px] p-5">
        <TextField
          value={fullName}
          label="customer full name"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <TextField
          value={id}
          label="National Id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Button onClick={clickHandel}>Create New Customer</Button>
      </Box>
    </Box>
  );
};

export default ConsumerDetail;
