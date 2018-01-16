import { LAYOUT_TITLE, LAYOUT_SHOW_DRAWER } from '../types';

const state = {
  title: 'Dashboard',
  drawer: false
};

const mutations = {
  [LAYOUT_TITLE](state, title) {
    state.title = title;
  },
  [LAYOUT_SHOW_DRAWER](state, show) {
    state.drawer = show;
  }
};

const actions = {
  setTitle({ commit }, title) {
    if (state.title !== title) commit(LAYOUT_TITLE, title);
  },
  showDrawer({ commit }, show) {
    if (state.drawer !== show) commit(LAYOUT_SHOW_DRAWER, show);
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
