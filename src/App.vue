<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="submit()">correo</button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<script>

import axios from 'axios';

export default {
  data(){
    return{
        user:{
            email: '',
            password: '',
        },
        request:{
          email: 'havillalobos331@gmail.com',
          data: {buyDate: '2 agosto',
            price: '5 pesos',
            name: 'Horacio Adame',
            date: '11 septiembre',
            area: '3',
            old: '0',
            adult: '1',
            child: '0',
            vehicleName: 'ford escape 2006',
            vehiclePlate: '12345',
            activity: 'acampar'}
        }
    }
  },
  methods:{
      async submit(){


            try {
                let response = await axios.post('http://localhost:4000/mail', this.request);
                console.log(response)
                alert("Registration Was successful");
                this.loader = false;
            } catch (err) {
                alert("Something Went Wrong");
            }
      }
  }
}
</script>
