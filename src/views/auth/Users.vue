<template>
  <div class="row" style="width:100vw">
    <div class="col-md-3" style="height:100vh; background:white">
      <div>
        <img
          src="https://trello-attachments.s3.amazonaws.com/5f1694c4580ddb3d982e97cb/300x288/0d9abaa6e9790091253f42782faf183d/cropped-Logo-Majalca-300x288.jpg"
          alt
          style="width:40%; margin-top:30px"
        />
        <p style="font-weight:bold; padding-top:10px">Administrador</p>

       <a href="#/dashboard"> <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-dashboard"></i> Dashboard
          </div>
        </div></a>
        <a href="#/users">
        <div class="container-options-active">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-user"></i> Usuarios
          </div>
        </div>
        </a>
        <a href="#/areas">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-map-marker-alt"></i> Áreas
          </div>
        </div>
        </a>
        <a href="#/reservations">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-clock"></i> Reservaciones
          </div>
        </div>
        </a>
        <a href="#/events" style="display: none;">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-ticket"></i> Eventos
          </div>
        </div>
        </a>
        <a href="#/news">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-newspaper"></i> Noticias
          </div>
        </div>
        </a>
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-sign-out-alt"></i> Cerrar Sesión
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-9 contenedor-general" style="height:100vh">
      <div class="table-container">
        <div class="row">
          <div class="col-md-2">
          <a href="users"><button class="btn btn-info"
              style="background: #558A16;" disabled>Usuarios Aplicación</button></a>
              </div>
              <div class="col-md-2">
          <a href="usersSec"><button class="btn btn-info"
              style="background: #558A16;" >Usuarios Guardia</button></a>
              </div>
            <div class="col-md-2">
          <a href="usersAdmin"><button class="btn btn-info"
              style="background: #558A16;">Usuarios Administrador</button></a>
              </div>
        </div>
        <div class="row" style="padding:15px">
          <div class="col-md-9 text-left">
            <h3>Usuarios Aplicación</h3>
          </div>
          <div class="col-md-3">
            <button
              class="btn btn-info"
              style="background: #558A16;"
              data-toggle="modal"
              data-target="#modalReservacion"
            >Registrar Usuario App</button>
          </div>
        </div>
        <table class="table-style table table-striped" style="width:70vw; text-align:left">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Tipo Usuario</th>
              <th>Registro Completo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="user in users" :key="user.uid" >
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.role}}</td>
            <td><span v-if="user.completeProfile">Completo</span><span v-else>Pendiente</span></td>
            <td><div style="width:100px;"><button style="font-size:13px" class="btn btn-info" @click="getUserToEdit(user.uid)"><i class="fa fa-edit"></i></button>
            <button style="font-size:13px; margin-left:10px" class="btn btn-danger" @click="deleteUser(user.uid)"><i class="fa fa-trash"></i></button></div></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="modalReservacion"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalReservacion"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
            <form @submit.prevent="addUser">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

              
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Nombre Usuario</label>
                  <input  class="form-control col-md-6" v-model="newUser.name" name="name" type="text">
                </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Email</label>
                  <input  class="form-control col-md-12" v-model="newUser.email" name="email" type="email">
                </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Password</label>
                  <input  class="form-control col-md-12" v-model="newUser.password" name="password" type="password">
                </div>
               
                
              
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary">Confirmar</button>
            </div>
          </div>
          </form>
        </div>
      </div>
      <!-- Fin Modal -->

      <!-- Modal Editar Usuario-->
      <div
        class="modal fade"
        id="modalEditar"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalEditar"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
           
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Editar Usuario </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

              
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Nombre Usuario</label>
                  <input  class="form-control col-md-6" v-model="updateUserData.name" name="name" type="text">
                </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Email</label>
                  <input  class="form-control col-md-12" v-model="updateUserData.email" name="email" type="email">
                </div>
               
                
              
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="updateUser(updateUserData.uid)">Confirmar</button>
            </div>
          </div>

        </div>
      </div>
      <!-- Fin Modal Editar Usuario-->
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { db } from "@/main";
var moment = require("moment");
moment.locale("es");


export default {
  data() {
    return {
      moment: moment,
      users: [],
      userSelect: [],
      updateUserData:{
        name:null,
        email:null,
        uid:null,
      },
      newUser:[],
      userID:'',
    };
  },
  filters: {
    formatDate(date) {
      moment.locale("es");

      return moment(date).format("LL");
    },
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.users = [];
      try {
        let response = await db.collection("users").where('role', '==', 'Usuario').get().then((doc) => {
            doc.forEach((res) => {
              this.users.push(res.data());
            });
          });

      } catch (error) {
        console.log(error);
      }
    },
    getUserToEdit(id){
      this.userSelect= [];
      db.collection('users').where('uid', '==', id).get().then((doc)=> {
            doc.forEach((res) => {
              
              this.userSelect.push(res.data());
              //console.log(this.userSelect[0].name);
              this.updateUserData.name=this.userSelect[0].name;
              this.updateUserData.email=this.userSelect[0].email;
              this.updateUserData.uid=id;
              $('#modalEditar').modal('show')
            });
          });
    },
    async addUser(){
        try {
                let response = await firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password)
                if(response){
                    
                    let user = {
                            uid: response.uid,
                            name: this.newUser.name,
                            email: this.newUser.email,
                        }
                    if(response.additionalUserInfo.isNewUser){
          
                       db.collection("users").add({
        name:this.newUser.name,
        email:this.newUser.email,
        completeProfile:false,
        uid:Math.random().toString(36).substring(7),
        role:'Usuario',
        terms:false,
      }).then( ()=> this.getUsers(), this.$swal('Registro Exitoso!'), $('#modalReservacion').modal('hide'))
                    
                    }
                    
                }
            } catch(e) {
                switch(e.code){
                  case 'auth/email-already-in-use':
                    alert('Correo electronico ya registrado');
                    break;
                }
                console.log(e);
            }



/*
      let response = db.collection("users").add({
        name:this.newUser.name,
        email:this.newUser.email,
        completeProfile:false,
        role:'Usuario',
        terms:false,
      }).then( ()=> this.getUsers(), this.$swal('Registro Exitoso!'), $('#modalReservacion').modal('hide')) */
    },
    updateUser(id){
      db.collection('users').doc(id).update({
        name:this.updateUserData.name,
        email:this.updateUserData.email,
      }).then( ()=> this.getUsers(), this.$swal('Usuario Actualizado Con Exito!'), $('#modalEditar').modal('hide'))

    },
    deleteUser(id){

      this.$swal({
  title: '¿Realmente quieres eliminar este usuario?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Eliminar`,
  denyButtonText: `Cancelar`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     db.collection('users').doc(id).delete().then(()=> this.getUsers(), this.$swal('Eliminado!', '', 'success'));
    
  } else if (result.isDenied) {
    this.$swal('No se elimino el usuario', '', 'info')
  }
})
     
    }
  },
};
</script>