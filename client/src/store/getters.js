export default {
    isAuthenticated(state) {
        console.log(state.accessToken);
        return state.accessToken
    },
    getInfoUser(state) {
        return state.userInfo;
    },
}