export const createConsumerAction = (fullName: string, id: string) => {
  return {
    type: "account/creation",
    payload: {
      createdAt: Date.now(),
      name: fullName,
      id,
    },
  };
};

export const updateConsumerAction = (fullName: string) => {
  return {
    type: "consumer/updateConsumerAction",
    payload: fullName,
  };
};
