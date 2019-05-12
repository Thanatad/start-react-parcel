import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

import App from './src/pages/App';

const { store, persistor } = configureStore()

const ReactApp = () => (

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)


ReactDOM.render(<ReactApp />, document.getElementById('root'))