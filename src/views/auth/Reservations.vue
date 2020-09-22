<style>
a{
text-decoration: none;    
}
a:hover{
text-decoration: none;    
}
.container-options {
  padding: 10px;
  background: white;
  text-align: left;
  padding-left: 30px;
  transition: 0.2s;
}
.container-options-active {
  padding: 10px;
  background: #f3f3f3;
  cursor: pointer;
  text-align: left;
  padding-left: 35px;
  transition: 0.2s;
}
.container-options:hover {
  padding-top: 10px;
  background: #f3f3f3;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  padding-left: 35px;
  transition: 0.2s;
}
.item-sidebar {
  padding: 10px;
  font-weight: bold;
}
.item-sidebar:hover {
  padding: 10px;
  font-weight: bold;
  background: #7c1b1b;
  cursor: pointer;
}
.contenedor-general {
  padding: 20px;
  padding-top: 50px;
  background: #F5F9FC;
  height: 100vh;
  overflow: scroll;
}
.table-container {
  background: white;
  padding: 10px;
}
.btn-info {
  background: #558a16;
  border: none;
}
.btn-info:hover {
  background: #558a16;
  border: none;
}
.table-style {
  border-top: solid;
  border-color: gray;
  border-width: 1px;
}
</style>
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
        <div class="container-options">
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
        <div class="container-options-active">
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
        <div class="row" style="padding:15px">
          <div class="col-md-9 text-left">
            <h3>Reservaciones</h3>
          </div>
          <div class="col-md-3">
            <button
              class="btn btn-info"
              style="background: #558A16;"
              data-toggle="modal"
              data-target="#modalReservacion"
            >Nueva Reservación</button>
          </div>
        </div>
        <table class="table-style table table-striped" style="width:70vw">
          <thead>
            <tr>
              <th>Visitante</th>
              <th>Área</th>
              <th>Periodo Reserva</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation.id">
              <td>{{reservation.userName}}</td>
              <td>{{reservation.areaName}}</td>
              <td>{{reservation.fecha}}</td>
              <td><span v-if="reservation.estado">PAGADO</span><span v-else>Pendiente Pago</span></td>
              <td class="text-center"><div style="width:80px;"><button style="font-size:13px" class="btn btn-info"><i class="fa fa-eye"></i>Ver</button></div></td>
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
            <form @submit.prevent="addReservation">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nueva Reservación</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

              
                  <div class="form-group">
                      <label for="exampleInputEmail1">Selecciona un Area</label>
                      <select v-model="newReservation.ubication" class="form-control" name="area" id="area">
                          <option v-for="area in areas" :key="area.id" :value="area.id">{{area.name}}</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputEmail1">Selecciona un Usuario</label>
                      <select class="form-control" v-model="newReservation.user" name="usuario" id="usuario">
                          <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}} - {{user.email}}</option>
                      </select>
                  </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Fecha Desde</label>
                  <input  class="form-control col-md-6" v-model="newReservation.dateOne" name="date1" type="date">
                  <input class="form-control col-md-6" name="time1" type="time">
                </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Fecha Hasta</label>
                  <input  class="form-control col-md-6" v-model="newReservation.dateTwo" name="date2" type="date">
                  <input class="form-control col-md-6"  name="time2" type="time">
                </div>
                <div class="form-group">
                      <label for="exampleInputEmail1">Actividad</label>
                      <select v-model="newReservation.activity" class="form-control" name="actividad" id="actividad">
                          <option value="Acampar">Acampar</option>
                          <option value="Ciclismo">Ciclismo</option>
                          <option value="Senderismo">Senderismo</option>
                          <option value="Otro">Otro</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="">Numero de personas que visitan</label>
                      <input v-model="newReservation.persons" class="form-control" value="1" type="number" id="numeroPersonas" min="1" name="numeroPersonas">
                  </div>
                <div class="form-group">
                      <label for="exampleInputEmail1">Vehiculo</label>
                      <select v-model="newReservation.user" class="form-control" name="usuario" id="usuario">
                          <option value="Carro">Carro</option>
                          <option value="Camioneta">Camioneta</option>
                          <option value="Troca">Troca</option>
                          <option value="Motocicleta">Motocicleta</option>
                      </select>
                      <label for="">
                      <input v-model="newReservation.trailer" type="checkbox" value="1"> Traila o Remolque</label>
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
      reservations: [],
      areas: [],
      users: [],
      userSelect: "",
      newReservation:[],
      nameUser:'',

    };
  },
  filters: {
    formatDate(date) {
      moment.locale("es");

      return moment(date).format("LL");
    },
  },
  mounted() {
    this.getReservations();
    this.getAreas();
    this.getUsers();
  },
  methods: {
    getUserName(id){
      return "Gerardo Lucero";
    },
    getAreaName(id){
      return "Area 1";
    },
    async getReservations() {
      this.reservations = [];
      try {
        
        let response = await db
          .collection("reservations")
          .get()
          .then((doc) => {
            doc.forEach((res) => {

              var userNameG = db.collection("users").where("uid", "==", res.data().user).get().then((doc1) => {
            doc1.forEach((res1) => {

              var areaNameG = db.collection("ubications").where("id", "==", res.data().ubication).get().then((doc2) => {
            doc2.forEach((res2) => {
             
              let objt = {
                userName:res1.data().name,
                areaName:res2.data().name,
                fecha:moment(res.data().dateOne.toDate()).format('lll')+' - '+moment(res.data().dateTwo.toDate()).format('lll'),
                estado:res.data().payment,
              }
              console.log(objt);
              this.reservations.push(objt);
                  });
                });
              });
            });    
            });
          });

       
      } catch (error) {
        console.log(error);
      }
    },
    async getAreas() {
      this.areas = [];
      try {
        let response = await db.collection("ubications").get().then((doc) => {
            doc.forEach((res) => {
              this.areas.push(res.data());
            });
          });

      } catch (error) {
        console.log(error);
      }
    },
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
    async addReservation(){
      let response = db.collection("reservation").add({
        dateOne:this.newReservation.dateOne,
        dateTwo:this.newReservation.dateTwo,
        payment:false,
        process:'EN CURSO',
        status:false,
        step:0,
        activity:this.newReservation.activity,
        ubication:this.newReservation.ubication,
        user:this.newReservation.user,
      }).then( ()=> this.getReservations(), this.$swal('Registro Exitoso!'), $('#modalReservacion').modal('hide')) 
    },
  },
};
</script>
