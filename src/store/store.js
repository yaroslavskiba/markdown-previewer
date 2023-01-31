import { legacy_createStore as createStore, combineReducers} from 'redux'
import stateReducer from "./reducers/markReducer";
import screenReducer from "./reducers/fullscreenReducer"

const rootReducer = combineReducers({
  state: stateReducer,
  screen: screenReducer,
})

const store = createStore(rootReducer);

export default store;