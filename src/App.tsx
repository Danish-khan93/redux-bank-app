import Bank from "./pages/Bank";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";

const App = () => {
return(
<Routes>
<Route path="/" element={<Home/>} />  
<Route path="/bank" element={<Bank/>} />  
</Routes>
)
};

export default App;
