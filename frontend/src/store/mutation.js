export const mutations = {
    LOGIN(state, payload) {
      state.user = payload;
    },
    SIGN_OUT(state) {
      state.user = {};
    },
  };
  