import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyD86bsttqYGTyqspgkoJWhmeX5XHRwYIjo",
  authDomain: "majalca-58d71.firebaseapp.com",
  databaseURL: "https://majalca-58d71.firebaseio.com",
  projectId: "majalca-58d71",
  storageBucket: "majalca-58d71.appspot.com",
  messagingSenderId: "809034328621",
  appId: "1:809034328621:web:13a62a507ec27b87d326a4",
  measurementId: "G-WNH96PE1C4"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
