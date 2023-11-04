import { createStore, combineReducers ,applyMiddleware} from "redux";
import { consumerReducer } from "./reducers/consumerReducer";
import { bankReducer } from "./reducers/backReducer";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  consumer: consumerReducer,
  bank:bankReducer,
  todo:todoReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
