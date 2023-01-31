import React from 'react';
import { GiConvergenceTarget, GiFountainPen } from "react-icons/gi";

function ToolBar() {
  return (
    <div className='toolContainer'>
      <div className='toolName'>
        <span className='toolText'>Editor</span>
        <GiFountainPen style={{fontSize:'14px'}} />
      </div>
      <GiConvergenceTarget />
    </div>
  );
}

export default ToolBar;