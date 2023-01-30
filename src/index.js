import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {

  return (
    <>
      <textarea id="editor"></textarea>
      <div id="preview"></div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
