import ConsumerDetail from "../component/customerComponent/ConsumerDetail";
import WellComeConsumer from "../component/customerComponent/WellComeConsumer";
import BankComponent from "../component/bankComponent/BankComponent";
import { useSelector } from "react-redux";

const Bank = () => {
  const select = useSelector((store: any) => store.consumer.name);
  return (
    <div className="flex flex-col items-center">
      {select ? (
        <>
          <WellComeConsumer />
          <BankComponent />
        </>
      ) : (
        <ConsumerDetail />
      )}
    </div>
  );
};

export default Bank;
