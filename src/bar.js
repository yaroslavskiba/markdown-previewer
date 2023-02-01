import React from 'react';
import { GiConvergenceTarget, GiFountainPen } from "react-icons/gi";
import { useDispatch, useSelector} from 'react-redux'

function ToolBar(props) {
  const dispatch = useDispatch();
  // const edit = useSelector(state => state.screen.edit);
  // const preview = useSelector(state => state.screen.preview);
  const screenName = props.screenName;
  const screenState = props.stateScreen;
  console.log(screenName, screenState)

  const rend = () => {
    if(screenState === 'normal') {
      return dispatch({ type: `FULLSCREEN`, stateName: [screenName], payload: 'fullscreen' })
    }
    return dispatch({ type: `FULLSCREEN`, stateName: [screenName], payload: 'normal' });
  }

  return (
    <div className='toolContainer'>
      <div className='toolName'>
        <span className='toolText'>Editor</span>
        <GiFountainPen style={{fontSize:'14px'}} />
      </div>
      <button className='fullScreen' onClick={(rend)}>
        <GiConvergenceTarget />
      </button>
    </div>
  );
}

export default ToolBar;