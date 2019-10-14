
import { createStore } from 'redux'
import combineReducers from './reducer'

const store = createStore(combineReducers)

// 当reducer返回新的state数据，就会自动更新页面UI组件
store.subscribe(() => {
    console.log("In store update: " + JSON.stringify(store.getState()));
});

export default store;