
import { createStore } from 'redux'
import combineReducers from './reducer'

const store = createStore(combineReducers)

// 当reducer返回新的state数据，就会自动更新页面UI组件
store.subscribe(() => {
    // console.log("In store update: " + JSON.stringify(store.getState()));
});

export default store;

/**

import { createStore } from 'redux'
import combineReducers from './reducer'
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const storageConfig = {
    key: 'root', // 必须有的
    storage: sessionStorage, // 缓存机制
    // whitelist: ['user', 'policy'], // reducer 里持久化的数据,除此外均为不持久化数据
    stateReconciler: autoMergeLevel2
}
const myPersistReducer = persistReducer(storageConfig, combineReducers)
const store = createStore(myPersistReducer);
// const store = compose(myPersistReducer,{},a)
const persistor = persistStore(store);

// 当reducer返回新的state数据，就会自动更新页面UI组件
store.subscribe(() => {
    console.log("In store update: " + JSON.stringify(store.getState()));
});

export { store, persistor };
*/