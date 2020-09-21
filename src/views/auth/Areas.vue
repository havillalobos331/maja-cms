<style>
.container-list{
  height: 500px;
  overflow: scroll;
  border:solid;
  border-width: 1px;
  border-radius: 2px;
  padding: 3px;
  border-color: #adadad;
}
.list-element{
  padding:8px;
  border-radius: 5px;
  background:#f0f0f0;
  margin-bottom: 10px;
  font-weight:bold;
}
.list-element:hover{
  padding:8px;
  cursor: pointer;
  border-radius: 5px;
  background:#f0f0f0;
  margin-bottom: 10px;
  font-weight:bold;
}
.status-d{
  background: green;
  width: 20%;
  height: 5px;
  border-radius: 5px;;
}
.status-nd{
  background: red;
  width: 20%;
  height: 5px;
  border-radius: 5px;;
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

       <a href="dashboard"> <div class="container-options">
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
        <div class="container-options-active">
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
      <div class="table-container">
        <div class="row" style="padding:15px; ">
          <div class="col-md-9 text-left">
            <h3>Areas</h3>
          </div>
          <div class="col-md-3">
            <button
              class="btn btn-info"
              style="background: #558A16;"
              data-toggle="modal"
              data-target="#modalReservacion"
            >Registrar Nueva Area</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h3 style="text-align: center; color:gray">Lista de Áreas <span style="font-size:20px"><i
              data-toggle="modal"
              data-target="#modalInformacion" style="color:green; cursor:pointer" class="fa fa-question-circle"></i></span></h3>
            <div class="container-list">
              <div v-for="area in areas" :key="area.id" class="list-element" @click="getAreaToEdit(area.id)">
                <div v-if="area.status" class="status-d"></div>
                <div v-else class="status-nd"></div>
                <span>{{area.name}}</span></div>
            </div>
          </div>
          <div class="col-md-8">
          <h3 style="text-align: center; color:gray">Mapa de Áreas</h3>
       <GoogleMap :latitude= 28.8669849 :longitude= -106.5630604 :title="'Area'" />
          </div>
        </div>
        
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
            <form @submit.prevent="addArea">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Crear Nueva Área</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

              <div class="form-group">
                      <label for="">Nombre</label>
                      <input class="form-control" value="1" type="name" v-model="newArea.name">
                  </div>
                  
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Ubicación</label>
                  <input  class="form-control col-md-6" name="latitud" placeholder="Latitud" v-model="newArea.lat" type="lat">
                  <input class="form-control col-md-6" name="Longitud" placeholder="Longitud" v-model="newArea.lon" type="lon">
                </div>

                <div class="form-group">
                      <label for="">descripción</label>
                      <textarea class="form-control" v-model="newArea.descripcion" id="" cols="30" rows="5"></textarea>
                  </div>
                
                <div class="form-group">
                  <label for="">Imagen Principal</label>
                  <input class="form-control" type="file">
                </div>
                
                  <div class="form-group">
                      <label for="">Capacidad </label>
                      <input class="form-control" placeholder="Numero de personas*" v-model="newArea.capacidad" type="number" id="numeroPersonas" min="1" name="numeroPersonas">
                  </div>

                  <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Caracteristica</label>
                  <input  class="form-control col-md-6" name="nuevaCaracteristica" placeholder="Caracteristica" v-model="newArea.caracteristica" type="text">
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



      <!-- Modal información-->
      <div
        class="modal fade"
        id="modalInformacion"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalInformacion"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">

          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Indicadores de Estatus de Área</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
              <div style="width:50%">
               
              <div class="list-element">
                <div class="status-d"></div>
                <span>Area Actualmente Disponible</span></div>
   

       
              <div class="list-element">
                <div class="status-nd"></div>
                <span>Area Actualmente No Disponible</span></div>
  

              </div>

              
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        
        </div>
      </div>
      <!-- Fin Modal -->

      <!-- Modal Ficha Tecnica-->
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
              <h5 class="modal-title" id="exampleModalLabel">Ficha Técnica Área</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
              
              <div class="row">
                <div class="col-md-12">
                <p v-if="updateAreaData.status" class="status-d" style="border-radius:5px; width:100%; height: auto; text-align:center; color:white; font-weight:bold">Disponible</p>
                <p v-else class="status-nd" style="border-radius:5px; width:100%; height: auto; text-align:center; color:white; font-weight:bold">No disponible</p>
                </div>
                <div class="col-md-12" style="padding-top:20px">
                  <div class="form-group">
                    <label for="">Nombre</label>
                    <input class="form-control" type="text" v-model="updateAreaData.name">
                  </div>

                  <div class="form-group">
                    <label for="">Descripción</label>
                    <textarea class="form-control" v-model="updateAreaData.description" ></textarea>
                  </div>

                  <div class="form-group">
                    <label for="">Capacidad</label>
                    <input class="form-control" type="number" min="1" v-model="updateAreaData.capacidad" >
                  </div>

                  <div class="form-group">
                    <label for="">Coordenadas</label>
                    <input class="form-control" type="text" v-model="updateAreaData.ubication" >
                  </div>

                  <div class="form-group">
                    <label for="">Fotos</label>
                    <div style="width:100%">
                    <img src="https://www.elagoradiario.com/wp-content/uploads/2020/02/Cascada-San-Rafael-1-1140x600.jpg" style="width:25%;" alt=""><br>
                    <button class="btn" style="color:white; background:red; font-size:10px; width:25%"><i class="fa fa-remove"></i></button>
                    </div>
                   
                  </div>

                </div>

              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" @click="deleteArea(updateAreaData.id)">Eliminar</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" @click="updateArea(updateAreaData.id)">Confirmar</button>
            </div>
          </div>
        
        </div>
      </div>
      <!-- Fin Modal Ficha Tecnica-->
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { db } from "@/main";
import GoogleMap from "../../components/GoogleMap";
var moment = require("moment");
moment.locale("es");

export default {
  components: {
    GoogleMap
  },
  data() {
    return {
      moment: moment,
      reservations: [],
      areas: [],
      users: [],
      newArea:[],
      areaSelect: [],
      updateAreaData:{
        name:'',
        email:'',
        id:'',
        image:'',
        capacidad:0,
        status:'',
        image:'',
        description:'',
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
   
getAreaToEdit(id){
  this.areaSelect=[],
      db.collection('ubications').where('id', '==', id).get().then((doc)=> {
            doc.forEach((res) => {
              
              this.areaSelect.push(res.data());
              //console.log(this.userSelect[0].name);
              this.updateAreaData.name=this.areaSelect[0].name;
              this.updateAreaData.email=this.areaSelect[0].description;
              this.updateAreaData.id=this.areaSelect[0].id;
              this.updateAreaData.image=this.areaSelect[0].image;
              this.updateAreaData.capacidad=this.areaSelect[0].capacidad;
              this.updateAreaData.description=this.areaSelect[0].description;
              this.updateAreaData.status=this.areaSelect[0].status;
              $('#modalFicha').modal('show')
            });
          });
    },
    async addArea(){

      let response = db.collection("ubications").add({
        name:this.newArea.name,
        caracteristica:this.newArea.caracteristica,
        description:this.newArea.descripcion,
        image:"https://concepto.de/wp-content/uploads/2018/09/desierto2-e1537800205712.jpg",
        status:true,
        capacidad:this.newArea.capacidad,
        ubication:this.newArea.lat+'ºN'+this.newArea.lon+'ºW',
      }).then( ()=> this.getAreas(), this.$swal('Registro Exitoso!'), $('#modalReservacion').modal('hide')) 
    },

    updateArea(id){
      db.collection('ubications').doc(id).update({
        name:this.updateAreaData.name,
        capacidad:this.updateAreaData.capacidad,
        description:this.updateAreaData.description,
      }).then( ()=> this.getUsers(), this.$swal('Area Actualizads Con Exito!'))

    },
    deleteArea(id){

      this.$swal({
  title: '¿Realmente quieres eliminar esta area?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Eliminar`,
  denyButtonText: `Cancelar`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     db.collection('ubications').doc(id).delete().then(()=> this.getAreas(), this.$swal('Eliminado!', '', 'success'), $('#modalFicha').modal('hide'));
    
  } else if (result.isDenied) {
    this.$swal('No se elimino el área', '', 'info')
  }
})
     
    }
  },
};
</script>

