import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/index'
import AppRouter from './components/router/AppRouter';
import { rootReducer } from './redux/rootReducer';

const str = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={str}>
        <App />
        <AppRouter/>
    </Provider>
);
