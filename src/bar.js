import React from 'react';
import { GiConvergenceTarget, GiFountainPen } from "react-icons/gi";
import { useDispatch, useSelector} from 'react-redux'

function ToolBar() {
  const dispatch = useDispatch();
  const screen = useSelector(state => state.screen.screen);

  const rend = () => {
    if(screen === 'normal') {
      return dispatch({ type: `FULLSCREEN`, payload: 'fullscreen' })
    }
    return dispatch({ type: `FULLSCREEN`, payload: 'normal' });
  }

  return (
    <div className='toolContainer'>
      <div className='toolName'>
        <span className='toolText'>Editor</span>
        <GiFountainPen style={{fontSize:'14px'}} />
      </div>
      <button className='fullScreen' onClick={rend}>
        <GiConvergenceTarget />
      </button>
    </div>
  );
}

export default ToolBar;