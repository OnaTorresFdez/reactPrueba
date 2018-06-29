import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRedux from './AppRedux';
import AppConnect from './AppConnect';
import Admin from './admin/Admin';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './actions/Action'

ReactDOM.render((
    <Provider store={store}> 
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route path='/AppRedux' component={AppRedux}/>
                <Route path='/AppConnect' component={AppConnect}/>
                <Route path='/admin' component={Admin}/>
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root')

);
registerServiceWorker();
    