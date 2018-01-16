import Vuetify from 'vuetify';
// index.js or main.js
import '../../node_modules/vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

export default {
  install: Vue => {
    Vue.use(Vuetify);
  }
};
