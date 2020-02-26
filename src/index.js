import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {authreducer} from './_store/reducer/auth'
import { bookReducer } from './_store/reducer/book';

const rootreducer = combineReducers({
auth: authreducer,
book: bookReducer   });

const store= createStore(rootreducer)

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
