
export const initPolicy = (policy) => {
    return {
        type: 'INIT_POLICY',
        data: policy
    }
}

export const updatePolicy = (policy) => {
    return {
        type: 'UPDATE_POLICY',
        data: policy
    }
}