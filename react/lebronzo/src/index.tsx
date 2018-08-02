import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventFeed from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <EventFeed />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
