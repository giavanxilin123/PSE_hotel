export const mutations = {
    LOGIN(state, payload) {
      state.user = payload;
    },
    SIGN_OUT(state) {
      state.user = {};
    },
    SEARCH_ROOM(state, payload) {
      state.searchRoom = payload;
    }
  };
  