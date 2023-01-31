import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './store/store';
import {marked} from 'marked';


function App() {
  const dispatch = useDispatch();
  const area = useSelector(state => state.area);
  const handleChange = (e) => dispatch({ type: `CHANGE`, payload: e.target.value });
  const createMarkUp = (val) => {
    return { __html: marked.parse(val) }
  }
  return (
    <>
      <textarea id="editor" onChange={handleChange} value={area}></textarea>
      <div id="preview" dangerouslySetInnerHTML={createMarkUp(area)} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
  headerIds: false,
  sanitize: true,
  smartypants: true,
  
});