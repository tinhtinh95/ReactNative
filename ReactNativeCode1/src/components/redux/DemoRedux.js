import React,{Component} from 'react';
import {} from 'react-native';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


export default class DemoRedux extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
const defaulState={
    arrWords:[
        {id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
        { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
        { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
        { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
        { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
        { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
        { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
        { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
        { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
        { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
        { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
        { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
        { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
        { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
    ],
    filterStatus: 'SHOW_ALL',
    isAdding: false
};

// reducer -> tien doan action
const reducer =(state=defaulState,action)=>{
    switch(action.type){
        case 'FILTER_SHOW_ALL':
            return { 
                ...state, filterStatus: 'SHOW_ALL',
                // arrWords: state.arrWords,
                // isAdding:state.isAdding,
        }
        case 'FILTER_MEMORIZED':
            return { 
                ...state, filterStatus: 'MEMORIZED',
        }
        case 'FILTER_NEED_PRACTICE':
            return { 
                ...state, filterStatus: 'NEED_PRACTICE',
        }
        case 'TOGGLE_MEMORIZED':
            return { 
                ...state, 
                arrWords: state.arrWords.map(e =>{
                    if(e.id !== action.id) return e;
                    return { ...e, memorized:!e.memorized}; 
                })
        }
       
        default:
        break;
    }
    return state;
}
// tao ra store
const store=createStore(reducer);

// tich hop vao trong ung dung react - Provider ( 1 component co chua props: store)

