import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './store/store';


function App() {
  const dispatch = useDispatch();
  const area = useSelector(state => state.area);
  console.log(area)
  const handleChange = (e) => dispatch({ type: `CHANGE`, payload: e.target.value });

  return (
    <>
      <textarea id="editor" onChange={handleChange} value={area}></textarea>
      <div id="preview" style={{fontSize:30}}>{ area }</div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

  