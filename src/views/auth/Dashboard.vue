<style>
::-webkit-scrollbar {
    display: none;
}
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
  font-weight: bold;
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
.dashboard-object-content{
  width: 100%;
  height: 100%;
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

       <a href="#/dashboard"> <div class="container-options-active">
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
      <h1>Dashboard</h1>
      <div class="main">

    <div class="dashboard-row">

      <div class="dashboard-object">
      <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <p class="dashboard-title">Visitantes por Edad<br><span style="font-style:italic; font-size:10px">(Ultimo Mes)</span></p>
        <table class="table table-striped" style="width:90%; text-align:left; margin-left:5%; font-size:14px">
          <tr>
            <td>Mayores de 18:</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Menores de 18:</td>
            <td>0</td>
          </tr>
        </table>
        </div>
      </div>

      <div class="dashboard-object">
      <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <p class="dashboard-title">Áreas Más Visitadas<br><span style="font-style:italic; font-size:10px">(Ultimo Mes)</span></p>
        <div style="height: 150px; overflow: scroll;">
        <table class="table table-striped" style="width:90%; text-align:left; margin-left:5%; font-size:14px">
          <tr v-for="area in areas" :key="area.id">
            <td>{{area.name}}</td>
            <td>0</td>
          </tr>
        </table>
        </div>
        </div>
      </div>

      <div class="dashboard-object">
       <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <div style="display: flex;">
          <p class="dashboard-title">Ocupacion por Fecha: </p>
          
        </div>
      <div class="form-group">
      <button v-if="selectTipoFecha>0" @click="restaurarTipoFecha()" class="btn btn-info" style="font-size:10px; padding:3px">Volver</button>
      <div style="with:100%"></div>
      <label v-if="selectTipoFecha<1">Selecciona tipo de Consulta</label>
          <select class="form-control" v-if="selectTipoFecha<1" v-model="selectTipoFecha">
          <option value="1">Rango de fechas</option>
          <option value="2">Semana</option>
          <option value="3">Mes</option>
          </select>
          <label v-if="selectTipoFecha==1">Desde</label>
          <input v-if="selectTipoFecha==1" class="form-control" type="date">
          <label v-if="selectTipoFecha==1">Hasta</label>
          <input v-if="selectTipoFecha==1" @change="txt1()" class="form-control" type="date">
          <label v-if="selectTipoFecha==2">Selecciona la semana</label>
          <input v-if="selectTipoFecha==2" @change="txt1()" class="form-control" type="week">
          <label v-if="selectTipoFecha==3">Selecciona el mes</label>
          <input v-if="selectTipoFecha==3" @change="txt1()" class="form-control" type="month">
          </div>
      </div>
</div>
    </div>

    <div class="dashboard-row">

      <div class="dashboard-object">
      <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <p class="dashboard-title">Actividades más comunes<br><span style="font-style:italic; font-size:10px">(Ultimo Mes)</span></p>
       <div style="height: 150px; overflow: scroll;">
        <table class="table table-striped" style="width:90%; text-align:left; margin-left:5%; font-size:14px">
          <tr>
            <td>Acampar:</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Ciclismo</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Senderismo</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Otro</td>
            <td>0</td>
          </tr>
        </table>
       </div>
        </div>
      </div>

      <div class="dashboard-object">
      <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <p class="dashboard-title">Cantidad de Areas Acupadas Actualmente</p>
       <div style="height: 150px; padding-top:30px">
        <h2>2/3</h2>
        <a href="/#/areas" class="btn btn-info">Áreas</a>
       </div>
        </div>
      </div>

      
      <div class="dashboard-object">
      <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <p class="dashboard-title">¿De Donde Nos Visitan?<br><span style="font-style:italic; font-size:10px">(Ultimo Mes)</span></p>
       <div style="height: 150px; overflow: scroll;">
        <table class="table table-striped" style="width:90%; text-align:left; margin-left:5%; font-size:14px">
          <tr>
            <td>Chihuahua</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Aldama</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Delicias</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Otro</td>
            <td>0</td>
          </tr>
        </table>
       </div>
        </div>
      </div>
    </div>

    <div class="dashboard-row">

      <div class="dashboard-object">
        <p class="dashboard-title">Ingresos del Mes</p>
        <p style="font-weight:bold; font-size:25px; padding-top:35px">$0.00</p>
        <button class="btn btn-info">Detalles</button>
      </div>

      <div class="dashboard-object">
      <div class="dashboard-object-content" style="background:url('img/bg-element-dashboard.png'); background-size: 100% auto; background-position:bottom; padding-bottom:35px; background-repeat:no-repeat">
        <p class="dashboard-title">Reporte de Guardias<br><span style="font-style:italic; font-size:10px">(Ultimo Escaneo)</span></p>
        <div style="height: 150px; overflow: scroll;">
        <table class="table table-striped" style="width:90%; text-align:left; margin-left:5%; font-size:14px">
          <tr v-for="area in areas" :key="area.id">
            <td>{{area.name}}</td>
            <td>10:15am</td>
          </tr>
        </table>
        </div>
        </div>
      </div>

      <div class="dashboard-object">
        <p class="dashboard-title">Reseñas de Usuarios</p>
        <div class="dashboard-row">
          <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
        </div>
        <div class="dashboard-row">
          <p style="font-style:italic">Datos Insuficientes para calcular promedio</p>
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
      selectTipoFecha:0,
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
    txt1(){
      alert ('No hay datos para mostrar');
      this.selectTipoFecha=0;
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
   restaurarTipoFecha(){
     this.selectTipoFecha=0;
   }
  },
};
</script>

