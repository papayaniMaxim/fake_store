import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducers';
import { HashRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import './fireBase'

const store = configureStore({
    reducer:reducer
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
    <Provider store = {store}>
        <HashRouter>
            <App /> 
        </HashRouter>        
    </Provider>
);
