import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Eventspage from './containers/Eventspage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Eventspage/>, document.getElementById('root'));
registerServiceWorker();
