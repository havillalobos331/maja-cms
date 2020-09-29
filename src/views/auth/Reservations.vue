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
            <button class="btn btn-info">Reservaciones Activas</button>
            <button class="btn btn-info" style="margin-left:10px" disabled>Historial de Reservaciones</button>
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
              <td class="text-center"><div  style="width:80px;"><button @click="getReservation(reservation.id)" style="font-size:13px" class="btn btn-info"><i class="fa fa-eye" ></i>Ver</button></div></td>
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
                          <option v-for="user in users" :key="user.id" :value="user.uid">{{user.name}} - {{user.email}}</option>
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
                  <div class="form-grup">
                  <label for="exampleInputEmail1">Vehiculos</label>
                  <input v-model="nuevoAuto"> <div @click="AgregarAuto()" class="btn btn-info" style="font-size:20px; padding:0px 10px">+</div>
                  <ul>
                  <li v-for="auto in autos" :key="auto.id">{{auto}}</li>
                  </ul>
                  </div>

                  <div class="form-grup">
                  <label for="exampleInputEmail1">Personas</label>
                  <input v-model="nuevaPersona"> <div @click="AgregarPersona()" class="btn btn-info" style="font-size:20px; padding:0px 10px">+</div>
                  <ul>
                  <li v-for="persona in personas" :key="persona.id">{{persona}}</li>
                  </ul>
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

       <!-- modal ficha tecnica -->

      <div
        class="modal fade"
        id="modalFicha"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalFicha"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
         
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ficha de reservacion</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

            <table class="table">
            <tr>
            <td><span style="font-weight:bold">Visitante: </span></td>
            <td><span style="font-style:italic; font-size:13px">{{reservationInfo.cliente}}</span></td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Area: </span></td>
            <td><span style="font-style:italic; font-size:13px">{{reservationInfo.area}}</span></td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Id Reservación: </span></td>
            <td><span style="font-style:italic; font-size:13px">{{reservationInfo.id}}</span></td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Desde: </span></td>
            <td>{{reservationInfo.dateOne}}</td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Hasta: </span></td>
            <td>{{reservationInfo.dateTwo}}</td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Ficha Creada: </span></td>
            <td>{{reservationInfo.date}}</td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Estado: </span></td>
            <td><p v-if="reservationInfo.payment" style="background:green; border-radius:5px; color:white; text-align:center">PAGADO</p>
            <p v-else style="background:orange; border-radius:5px; color:white; text-align:center">PENDIENTE DE PAGO</p></td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Personas: </span></td>
            <td><ul>
                  <li v-for="personas in reservationInfo.personas" :key="personas.id">{{personas}}</li>
                  </ul></td>
            </tr>
            <tr>
            <td><span style="font-weight:bold">Vehiculos: </span></td>
            <td>
            <ul>
                  <li v-for="vehiculo in reservationInfo.vehiculos" :key="vehiculo.id">{{vehiculo}}</li>
                  </ul>
            </td>
            </tr>
            <tr>
            <td colspan="2" class="text-center"><img style="width:200px" src="https://adpro3d-os.com/frame.png"></td>
            </tr>
            </table>
           
            
            
              
                
                
              
              
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="cancelarReserva(reservationInfo.id)">Cancelar Reservacion</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
       
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
      reservationSelect:[],
      nuevoAuto:null,
      nuevaPersona:null,
      autos:[],
      personas:[],
      nameUser:'',
      reservationInfo:{
        id:null,
        dateOne:null,
        date:null,
        dateTwo:null,
        payment:null,
        process:null,
      },

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
    AgregarAuto(){
      this.autos.push(this.nuevoAuto);
      this.nuevoAuto='';
    },
    AgregarPersona(){
      this.personas.push(this.nuevaPersona);
      this.nuevaPersona='';
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
                id:res.data().id,
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
        let response = await db.collection("ubications").where("status", "==", true).get().then((doc) => {
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
      let response = db.collection("reservations").add({

        
        dateOne:this.newReservation.dateOne,
        dateTwo:this.newReservation.dateTwo,
        date:new Date(),
        payment:false,
        process:'EN CURSO',
        status:false,
        step:0,
        activity:this.newReservation.activity,
        ubication:this.newReservation.ubication,
        user:this.newReservation.user,
        cars:this.autos,
        persons:this.personas,
      }).then( ()=> this.getReservations(), this.$swal('Registro Exitoso!'), $('#modalReservacion').modal('hide')) 
    },
   async getReservation(id){
     
      this.reservationSelect= [];
      let response = await db.collection('reservations').where('id', '==', id).get().then((doc)=> {
            doc.forEach((res) => {  

              var userNameG = db.collection("users").where("uid", "==", res.data().user).get().then((doc1) => {
            doc1.forEach((res1) => {

              var areaNameG = db.collection("ubications").where("id", "==", res.data().ubication).get().then((doc2) => {
            doc2.forEach((res2) => {
             
              
               // userName:res1.data().name,
               // areaName:res2.data().name,

              this.reservationSelect.push(res.data());
              
              this.reservationInfo.date=moment(this.reservationSelect[0].date.toDate()).format('lll');
              this.reservationInfo.dateOne=moment(this.reservationSelect[0].dateOne.toDate()).format('lll');
              this.reservationInfo.dateTwo=moment(this.reservationSelect[0].dateTwo.toDate()).format('lll');
              this.reservationInfo.id=this.reservationSelect[0].id;
              this.reservationInfo.cliente=res1.data().name;
              this.reservationInfo.personas=this.reservationSelect[0].persons;
              this.reservationInfo.vehiculos=this.reservationSelect[0].cars;
              this.reservationInfo.area=res2.data().name;
              this.reservationInfo.payment=this.reservationSelect[0].payment;
              this.reservationInfo.process=this.reservationSelect[0].process;
                
              console.log(objt);
              this.reservations.push(objt);
                  });
                });
              });
            });  


             
              //console.log(this.userSelect[0].name);
              
              
            });
          });
         $('#modalFicha').modal('show') 

    },
    cancelarReserva(id){

      this.$swal({
  title: '¿Realmente quieres cancelar esta reservacion?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Cancelar Reservacion`,
  denyButtonText: `Regresar`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     db.collection('reservations').doc(id).delete().then(()=> this.getReservations(), this.$swal('Eliminado!', '', 'success'));
    
  } else if (result.isDenied) {
    this.$swal('No se cancelo la rservacion', '', 'info')
  }
})
     
    }
  },
};
</script>
