import React,{Component} from 'react';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './redux/store';


export default class DemoRedux extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
