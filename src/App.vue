<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="submit(1234)">correo</button>
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
import firebase from "firebase";
import axios from 'axios';
var QRCode = require('qrcode');



export default {
  data(){
    return{
        picture: null,
        imagedata: null,
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
            activity: 'acampar',
            qr:''}
        }
    }
  },
  methods:{
      async submit(id){
            try {
                let imgName = 'resv_'+id+'.png';
                let storageRef = null;
                QRCode.toDataURL('http://www.google.com', function (err, string) {
                  if (err) throw err
                  storageRef= firebase.storage().ref().child('qr/'+imgName).putString(string, 'data_url').then(function(snapshot) {
                    snapshot.ref.getDownloadURL().then((url)=>{
                    console.log(url);
                    //le asignamos la url de la foto que se subio a la variable
                    this.request.data.qr = url;
                    //Este alert arroja el url de la imagen, lo deje como indicador pero hay que comentarlo para que no afecte la experiencia de usuario
                    alert(this.picture);
                    });
                  });
                });

                let response = await axios.post('http://localhost:4000/mail', this.request);
                console.log(response)
                alert("Registration Was successful");
            } catch (err) {
                console.log(err);
                alert("Something Went Wrong");
            }
      }
  }
}
</script>
