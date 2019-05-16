import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // manages store for you
import createApplicationStore from './create-store';
import './index.css';
import App from './App/App';

const store = createApplicationStore();

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
