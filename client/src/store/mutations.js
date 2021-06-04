export default {
    updateLoadingGlobal(state, status) {
        state.isLoading = status
    },
    updateDialogMess(state, { status, mess }) {
        state.dialogMess.status = status;
        state.dialogMess.mess = mess;
    },
    updateAccessToken(state, token) {
        state.accessToken = token
    },
    updateUserInfo(state, userInfo) {
        state.userInfo = { ...userInfo }
    },
    
}