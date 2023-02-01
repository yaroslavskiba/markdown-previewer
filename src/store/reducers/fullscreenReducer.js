import stateScreen from '../states/fullscreenState'

const screenReducer = (state = stateScreen, action) => {
  const stateName = action.stateName;
  switch (action.type) {
    case 'FULLSCREEN':
      return {...state, [stateName]: action.payload};
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
};
 
export default screenReducer;