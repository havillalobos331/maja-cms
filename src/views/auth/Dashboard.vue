<style>
button{
  background-color: #707070;
  color: white;
  border-color: #707070;
  border-radius: 10px;
  padding: 2px 10px;
  border-style: solid;
}
.main{
  background-color: #f5f9fc;
  width: 100%;
  height: 100vw;
}

.dashboard-title{
  border-bottom-style: solid;
  border-color: #efefef;
  width: 100%;
  margin: 0;
  padding: 10px 10px;
  margin: 10px 0;

}
.dashboard-row{
  display:flex;
  justify-content: center;
  margin: 10px 0;
}
.dashboard-object{
  margin: 30px;
  padding: 10px 0;
  border-style: none;
  width: 350px;
  background-color: #ffffff;

}
.background-example{
  background-image:none;
}
p{
  margin: 0 10px;
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

       <a href="dashboard"> <div class="container-options-active">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-dashboard"></i> Dashboard
          </div>
        </div></a>
        <a href="users">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-user"></i> Usuarios
          </div>
        </div>
        </a>
        <a href="areas">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-map-marker-alt"></i> Áreas
          </div>
        </div>
        </a>
        <a href="reservations">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-clock"></i> Reservaciones
          </div>
        </div>
        </a>
        <a href="events">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-ticket"></i> Eventos
          </div>
        </div>
        </a>
        <a href="news">
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
      <h1>Dashboard</h1>
      <div class="main">

    <div class="dashboard-row">

      <div class="dashboard-object">
        <p class="dashboard-title">Visitantes por Edad</p>
        <img alt="Vue logo" src="" style="width:100%;">
      </div>

      <div class="dashboard-object">
        <p class="dashboard-title">Areas mas Visitadas</p>
        <img alt="Vue logo" src="" style="width:100%;">
      </div>

      <div class="dashboard-object">
        <div style="display: flex;">
          <p class="dashboard-title">Ocupacion por: </p>
          <p class="dashboard-title">Dia</p>
          <p class="dashboard-title">Semana</p>
          <p class="dashboard-title">Mes</p>
        </div>
        <img alt="Vue logo" src="" style="width:100%;">
      </div>

    </div>

    <div class="dashboard-row">
      <div class="dashboard-object">
        <p class="dashboard-title">Actividades mas comunes</p>
        <img alt="Vue logo" src="" style="width:100%;">
      </div>
      <div class="dashboard-object">
        <p class="dashboard-title">Cantidad de Areas Acupadas Actualmente</p>
        <img alt="Vue logo" src="" style="width:100%;">
      </div>
      <div class="dashboard-object">
        <p class="dashboard-title">De donde nos visitan?</p>
        <div class="dashboard-row">
          <p>Chihuahua - 15</p>
        </div>
        <div class="dashboard-row">
          <p>Mexico DF - 2</p>
        </div>
      </div>
    </div>

    <div class="dashboard-row">

      <div class="dashboard-object">
        <p class="dashboard-title">Ingresos Mensuales</p>
        <p>$23456</p>
        <button style="float:right;">Detalles</button>
      </div>

      <div class="dashboard-object">
        <p class="dashboard-title">Reportes de Guardias</p>
        <div class="dashboard-row">
          <p>reporte</p> <button style="float:right;">Detalles</button>
        </div>
        <div class="dashboard-row">
          <p>reporte</p> <button style="float:right;">Detalles</button>
        </div>
        <div class="dashboard-row">
          <p>reporte</p> <button style="float:right;">Detalles</button>
        </div>
        <div class="dashboard-row">
          <p>reporte</p> <button style="float:right;">Detalles</button>
        </div>
      </div>

      <div class="dashboard-object">
        <p class="dashboard-title">Reseñas de Usuarios</p>
        <div class="dashboard-row">
          <p>reseña</p> <button style="float:right;">Detalles</button>
        </div>
        <div class="dashboard-row">
          <p>reseña</p> <button style="float:right;">Detalles</button>
        </div>
      </div>

    </div>

    <div class="dashboard-row">

    </div>
  </div>

     
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
    async getReservations() {
      this.reservations = [];
      try {
        let response = await db
          .collection("reservations")
          .get()
          .then((doc) => {
            doc.forEach((res) => {
              this.reservations.push(res.data());
            });
          });

        if (this.userSelect != "") {
          this.userSelect = this.users.find((doc) => {
            return (this.userSelect.uid = doc.uid);
          });

          console.log(this.userSelect);
        }
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
        let response = await db.collection("users").get().then((doc) => {
            doc.forEach((res) => {
              this.users.push(res.data());
            });
          });

      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

