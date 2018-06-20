import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { baseName } from './routes';

const store = createStore((state = []) => {
  return state;
});

ReactDOM.render(
  <Provider store={store}>
    <Router basename={baseName}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
