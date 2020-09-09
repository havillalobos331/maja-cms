<style>
.contenedor{
    width: 100vw;
    height: 100vh;
    background: url('http://www.cambio.gob.mx/redchihuahua/IMG/jpg/img_8244.jpg');
    background-size: 100% auto;
    padding-top: 20vh;
}

</style>
<template>
<section>
    <div class="contenedor">

<div class="card text-center col-8 offset-2">
  <div class="card-body" style="padding:0">
    <div class="row" style="padding:0">
        <div class="col-6" style="overflow:hidden; padding:0">
            <img src="http://www.cambio.gob.mx/redchihuahua/IMG/jpg/img_8244.jpg" style="height:60vh" alt="">
        </div>
        <div class="col-6" style="padding:60px 30px">
        <h5 class="card-title text-left">Recuperar Contraseña</h5><br>
        <p>Ingresa el correo de la cuenta. Si existe una cuenta registrada, le enviaremos el correo de recuperacion.</p><br>
        <input v-model="user.email" class="form-control" type="text" placeholder="Correo Electronico"><br>
        <a href="/lost-password" target="_blank"><p style="text-align:right; width:100%">¿Olvidaste tu contraseña?</p></a>
        <button class="btn btn-dark" style="width:100%" @click="ResetPassword()">Iniciar sesión</button><br>
       <p style="width:100%; padding-top:15px">¿No tienes una cuenta?  <a href="/register" target="_blank">Registrate aquí</a></p>
        </div>
    </div>
  </div>

</div>



    </div>
</section>
</template>

<script>

import firebase from "firebase";

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
    async ResetPassword(){
                firebase.auth().sendPasswordResetEmail(this.user.email).then(()=>{
                    //Swal.fire({
                    //    title: 'Correo Enviado!',
                    //    icon: 'success',
                    //    confirmButtonText: 'Ok'
                    //})
                }).catch(function(error) {
                    Swal.fire({
                        title: 'Ocurrio un Error',
                        icon: 'failure',
                        confirmButtonText: 'Ok'
                    })
                })
            }
  }
}
</script>
