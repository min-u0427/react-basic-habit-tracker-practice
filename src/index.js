import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  // app.jsx에 App을 연결 시켜서 App의 내용이 출력 되게 한것.
  // 제일 상위에 있는 컴포넌트를 연결해 주는 것이 리엑트 돔
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);


