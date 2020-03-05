import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;


// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fasHeart, farHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const songs = localStorage.getItem("favoritedSongs");
if (!songs) {
  localStorage.favoritedSongs = JSON.stringify([]);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
