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
  const edit = useSelector(state => state.screen.edit);
  const preview = useSelector(state => state.screen.preview);

  const handleStyleEdit = (s) => {
    const styles = {
      maxWidth: '90vw',
    }
    return s === 'normal' ? {} : styles;
  }

  const handleTextArea = () => {
    return edit === 'normal' ? '10' : '30';
  }
  const handleChange = (e) => dispatch({ type: `CHANGE`, payload: e.target.value });

  const createMarkUp = (val) => {
    return { __html: marked.parse(val) }
  }

  return (
    <>
      <div className='editorContainer' style={handleStyleEdit(edit)}>
        <ToolBar screenName='edit' stateScreen={edit} />
        <textarea id='editor' onChange={handleChange} value={area} rows={handleTextArea()}></textarea>
      </div>
      <div className='previewerContainer' style={handleStyleEdit(preview)}>
        <ToolBar screenName='preview' stateScreen={preview} />
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
  smartypants: true,  
});