// Map Umbraco icons with Material Iconss
const icons = {
  dashboard: 'home',
  traycontent: 'content_copy',
  traymedia: 'perm_media',
  traysettings: 'settings',
  traydeveloper: 'code',
  trayuser: 'verified_user',
  traymember: 'account_box',
  'icon-umb-contour': 'widgets'
};

export default {
  install: Vue => {
    Vue.prototype.$icon = icon => icons[icon];
  }
};
