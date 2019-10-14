import Immutable from 'immutable';

// 初始化状态
const initialState = Immutable.fromJS({
    userInfo: null,
    loginSuccess: false,
    errorMsg: null,
});

//  reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state
const user = (state = initialState, action = {}) => {
    switch (action.type) { // 判断 action 类型
        case "USER_LOGIN_SUCCESS":
            console.log("redux update login state success");
            return state.merge({   // 更新状态
                'userInfo': action.data,
                'loginSuccess': true,
                'errorMsg': null
            });
        case "USER_LOGIN_FAIL":
            return state.set('errorMsg', action.data);
        case "USER_LOGOUT":
            console.log("redux update logout");
            return state.merge({
                'userInfo': null,
                'loginSuccess': false,
                'errorMsg': null,
            });
        default:
            return state
    }
};

export default user;