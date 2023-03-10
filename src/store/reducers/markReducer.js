import stateArea from '../states/markInitialState'

const stateReducer = (state = stateArea, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {area: action.payload};
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
};
 
export default stateReducer;