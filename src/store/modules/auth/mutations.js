export default {
    setUser(state, payload) {
        const { token, userId } = payload;
        state.userId = userId;
        state.token = token;
    },

    setAutoLogout(state) {
        state.didAutoLogout = true;
    }
}