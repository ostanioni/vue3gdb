const WS = {
  state: () => ({
    socketIsActive: false,
    socketDeactivateReason: "not init",
  }),
  mutations: {
    socket_deactivate() {
      this.state.socketIsActive = false;
      console.log("socket DEactivated");
    },
    socket_activate() {
      this.state.socketIsActive = true;
      console.log("mutation: socket activated");
    },
    socket_toggle() {
      this.state.socketIsActive = !this.state.socketIsActive;
      console.log("mutation: socket toggled");
      console.log(this.state.socketIsActive);
    }
  },
  actions: {
    socket_toggle({ commit}) {
      commit("socket_toggle");
    },
    socket_activate({ commit }) {
      commit("socket_activate");
    },
    socket_deactivate({ commit }) {
      commit("socket_deactivate");
    },
  },
};

export { WS };
