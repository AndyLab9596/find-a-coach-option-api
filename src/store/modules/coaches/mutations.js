export default {
    setCoaches(state, payload) {
        return state.coaches = payload
    },
    setFetchTimestamp(state) {
        return state.lastFetch = new Date().getTime()
    }
}