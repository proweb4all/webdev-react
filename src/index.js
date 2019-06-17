import React from 'react';
import ReactDOM from 'react-dom';
import App from './current/App';
//import App from './current/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
