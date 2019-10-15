import Immutable from 'immutable';

// 初始化状态
const initialState = Immutable.fromJS({
    userInfo: null,
    loginSuccess: false,
    errorMsg: null,
});

//  reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state
const user = (state = initialState, action = {}) => {
    let session = {};
    switch (action.type) { // 判断 action 类型
        case "USER_LOGIN_SUCCESS":
            console.log("redux update login state success");
            sessionStorage.setItem('persist:user', JSON.stringify(action.data));
            return state.merge({
                userInfo: action.data,
                loginSuccess: true,
                errorMsg: null
            });
        case "USER_LOGIN_FAIL":
            return state.set('errorMsg', action.data);
        case "USER_LOGOUT":
            console.log("redux update logout");
            sessionStorage.setItem('persist:user', null);
            return state.merge({
                userInfo: null,
                loginSuccess: false,
                errorMsg: null
            });
        default:
            session = JSON.parse(sessionStorage.getItem('persist:user'));
            if (session !== null) {
                console.log(">>>>>>>>>in default" + JSON.stringify(session));
                state.userInfo = session;
                return state.merge({
                    userInfo: session,
                    loginSuccess: true,
                    errorMsg: null
                })
            }
            return state;
    }
};

export default user;