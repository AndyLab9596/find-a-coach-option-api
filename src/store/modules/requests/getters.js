export default {
    requests(state, getters, rootState, rootGetters) {
      const coachId = rootGetters.userId;
      const filteredRequests = state.requests.filter(
        (req) => req.coachId === coachId
      );
      return filteredRequests;
    },
    hasRequests(state, getters) {
      return getters.requests && getters.requests.length > 0;
    },
  };
  