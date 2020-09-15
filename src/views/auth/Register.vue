<style>
.contenedor{
    width: 100vw;
    height: 100vh;
    background: url('http://www.cambio.gob.mx/redchihuahua/IMG/jpg/img_8244.jpg');
    background-size: 100% auto;
    padding-top: 20vh;
}
.btn-green{
    background:#558A16;
    color:white;
}
.btn-green:hover{
    background:#3d660a;
    color:white;
    font-weight: bold;
}

</style>
<template>
<section>
     <div class="contenedor" style="background:url('img/bglogin.png'); background-size:auto 100%; background-position:bottom">

<div class="card text-center col-8 offset-2">
  <div class="card-body" style="padding:0">
    <div class="row" style="padding:0">
        <div class="col-6" style="overflow:hidden; padding:0; background:url('img/imglogin.png'); background-size: cover; background-repeat:no-repeat">
           
        </div>
        <div class="col-6" style="padding:60px 30px">
        <h5 class="card-title text-left">Registro</h5>
        <input v-model="user.name" class="form-control" type="text" placeholder="Introduce Tu Nombre"><br>
        <input v-model="user.email" class="form-control" type="text" placeholder="Introduce Tu Correo"><br>
        <input v-model="user.password" class="form-control" type="password" placeholder="Introduce Tu Contraseña"><br>
        <button class="btn btn-green" style="width:100%" @click="createUser()">Registrarse</button><br>
       <p style="width:100%; padding-top:15px">¿ya tienes una cuenta?  <a href="login">inicia sesión aquí</a></p>
        </div>
    </div>
  </div>
 
</div>


    
    </div>
</section>
</template>

<script>

export default {

data(){
return{
    user:{
        email: '',
        password: '',
    }
}
},
methods:{
async createUser(){
            try {
                let response = await firebase.auth().createUserWithEmailAndPassword({
                    email: this.user.email,
                    password: this.user.password
                })

                if(response){

                    let user = {
                            uid: response.uid,
                            name: this.user.name,
                            email: this.user.email,
                        }

                    if(response.additionalUserInfo.isNewUser){
                        await firebase.firestore.collection('users').doc(user.uid).set(user)
                    }

                    this.getUser(response.uid)

                }
            } catch(e) {
                alert('error');
                console.log(e);
            }
        },

async getUser(uid){
            try {
                let response = await firebase.firestore().collection('users').doc(uid).get()

                if(response.exists){
                    let user = response.data()

                    //router push 
                    this.$router.replace({ name: 'Home' })
                }
            } catch (error) {
               
                console.log(error)
            }
        },
}
}
</script>

