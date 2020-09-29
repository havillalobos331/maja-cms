import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase/app";
import 'firebase/auth';
import { VuejsDatatableFactory } from 'vuejs-datatable';
import * as VueGoogleMaps from "vue2-google-maps";
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
  },
});

 
Vue.use( VuejsDatatableFactory );

Vue.config.productionTip = false;

const configOptions = {
   apiKey: "AIzaSyD86bsttqYGTyqspgkoJWhmeX5XHRwYIjo",
    authDomain: "majalca-58d71.firebaseapp.com",
    databaseURL: "https://majalca-58d71.firebaseio.com",
    projectId: "majalca-58d71",
    storageBucket: "majalca-58d71.appspot.com",
    messagingSenderId: "809034328621",
    appId: "1:809034328621:web:899204c146ce6de4d326a4",
    measurementId: "G-RTYSEJ8Q6D"
};

let app = firebase.initializeApp(configOptions);
export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
