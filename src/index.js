import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './store/store';
import { marked } from 'marked';
import ToolBar from './bar';


function App() {
  const dispatch = useDispatch();
  const area = useSelector(state => state.state.area);
  const screen = useSelector(state => state.screen.screen);
  const handleScreen = (n) => {
    return screen === 'normal' ? n : `${n} fullscreen`
  }
  const handleChange = (e) => dispatch({ type: `CHANGE`, payload: e.target.value });
  const createMarkUp = (val) => {
    return { __html: marked.parse(val) }
  }
  return (
    <>
      <div className={handleScreen('editorContainer')}>
        <ToolBar />
        <textarea id='editor' onChange={handleChange} value={area} rows='10'></textarea>
      </div>
      <div className={handleScreen('previewerConteiner')}>
        <ToolBar />
        <div id='preview' dangerouslySetInnerHTML={createMarkUp(area)} />
      </div>
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