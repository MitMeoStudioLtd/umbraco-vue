import { LAYOUT_TITLE, LAYOUT_TOGGLE_DRAWER } from '../types';

const state = {
  title: 'Dashboard',
  showDrawer: false
};

const mutations = {
  [LAYOUT_TITLE](state, { title }) {
    state.title = title;
  },
  [LAYOUT_TOGGLE_DRAWER](state) {
    state.showDrawer = !state.showDrawer;
  }
};

const actions = {
  setTitle({ commit }, { title }) {
    if (state.title !== title) commit(LAYOUT_TITLE, { title });
  },
  toggleDrawer({ commit }) {
    commit(LAYOUT_TOGGLE_DRAWER);
  }
};

const getters = {
  // getBrowserPath: state => state.path
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
