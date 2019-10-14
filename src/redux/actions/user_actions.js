

export const userLoginSuccess = (userInfo) => {
    return {
        type: 'USER_LOGIN_SUCCESS',
        data: userInfo
    }
}

export const userLoginFail = (errorMsg) => {
    return {
        type: 'USER_LOGIN_FAIL',
        data: errorMsg
    }
}

export const userLogout = () => ({
    type: 'USER_LOGOUT',
})