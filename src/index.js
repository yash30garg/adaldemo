import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

runWithAdal(authContext, () => {
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
});
