import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppRouter from './components/router/AppRouter';
import { rootReducer } from './redux/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import BackToTopButton from './components/Footer/BackToTopButton';
const str = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={str}>
            <App />
            <BackToTopButton />
        </Provider>
    </BrowserRouter>
);
