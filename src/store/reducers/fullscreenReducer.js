import stateScreen from '../states/fullscreenState'

const screenReducer = (state = stateScreen, action) => {
  switch (action.type) {
    case 'FULLSCREEN':
      return {screen: action.payload};
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
};
 
export default screenReducer;