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
        <div class="container-options-active">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-newspaper"></i> Noticias
          </div>
        </div>
        <a href="#/news">
        <div class="container-options">
          <div style="color:#A0A0A0; font-size:22px">
            <i class="fa fa-sign-out-alt"></i> Cerrar Sesión
          </div>
        </div>
        </a>
      </div>
    </div>

    <div class="col-md-9 contenedor-general" style="height:100vh">
      <div class="table-container">
        <div class="row" style="padding:15px">
          <div class="col-md-9 text-left">
            <h3>Noticias</h3>
          </div>
          <div class="col-md-3">
            <button
              class="btn btn-info"
              style="background: #558A16;"
              data-toggle="modal"
              data-target="#modalReservacion"
            >Nueva Noticia</button>
          </div>
        </div>
        <table class="table-style table table-stripped" style="width:70vw">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Titulo</th>
              <th>Resumen</th>
              <th>Fecha Creación</th>
              <th>Status</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="noticia in news" :key="noticia.id"> 
              <td><img style="width:80px ;" v-bind:src="noticia.image"></td>
              <td>{{noticia.title}}</td>
              <td>{{noticia.extract}}</td>
              <td>{{noticia.date}}</td>
              <td>{{noticia.status}}</td>
              <td><div style="width:100px;"><button style="font-size:13px" class="btn btn-info" @click="getNewsToEdit(noticia.id)"><i class="fa fa-edit"></i></button>
            <button style="font-size:13px; margin-left:10px" class="btn btn-danger" @click="deleteNews(noticia.id)"><i class="fa fa-trash"></i></button></div></td>
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
            <form @submit.prevent="addNew">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nueva Noticia</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

                  <div class="form-group">
                      <label for="">Titulo</label>
                      <input class="form-control" placeholder="Titulo" type="text" v-model="newNews.titulo">
                  </div>
                  <div class="form-group">
                      <label for="">Resumen</label>
                      <input class="form-control" placeholder="Resumen" type="text" v-model="newNews.resumen">
                  </div>
                <div class="form-group">
                      <label for="exampleInputEmail1">Cuerpo de la noticia</label>
                      <textarea class="form-control" v-model="newNews.cuerpo"  cols="30" rows="5"></textarea>
                  </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </div>
          </form>
        </div>
      </div>
      <!-- Fin Modal -->
      <!-- Modal Editar Noticia-->
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
              <h5 class="modal-title" id="exampleModalLabel">Editar Noticia </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">

              
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Titulo</label>
                  <input  class="form-control col-md-6" v-model="updateNewsData.title" type="text">
                </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Resumen</label>
                  <input  class="form-control col-md-12" v-model="updateNewsData.extract"  type="text">
                </div>
                <div class="form-group row" style="padding:15px">
                  <label for="" class="col-md-12">Contenido</label>
                  <textarea  class="form-control col-md-12" rows="5" v-model="updateNewsData.body" ></textarea>
                </div>
                <div class="form-group" style="padding:15px">
                  <select v-model="updateNewsData.status">
                    <option value="Activa">Activa</option>
                    <option value="Inactiva">Inactiva</option>
                  </select>
                </div>
               
                
              
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="updateNews(updateNewsData.id)">Confirmar</button>
            </div>
          </div>

        </div>
      </div>
      <!-- Fin Modal Editar Noticia-->
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
      news: [],
      newNews:[],
      newsSelect: [],
      updateNewsData:{
        title:null,
        extract:null,
        body:null,
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
    this.getNews();
  },
  methods: {
    async getNews() {
      this.news = [];
      try {
        let response = await db.collection("news").get().then((doc) => {
            doc.forEach((res) => {
                let newsData = {
                  title:res.data().title,
                  extract:res.data().extract,
                  body:res.data().body,
                  date: moment(res.data().date.toDate()).format('lll'),
                  status:res.data().status,
                  image:res.data().image,
                  id:res.data().id,
                  }
              this.news.push(newsData);
            });
          });

      } catch (error) {
        console.log(error);
      }
    },
    getNewsToEdit(id){
      this.newsSelect= [];
      db.collection('news').where('id', '==', id).get().then((doc)=> {
            doc.forEach((res) => {
              
              this.newsSelect.push(res.data());
              //console.log(this.userSelect[0].name);
              this.updateNewsData.title=this.newsSelect[0].title;
              this.updateNewsData.extract=this.newsSelect[0].extract;
              this.updateNewsData.body=this.newsSelect[0].body;
              this.updateNewsData.status=this.newsSelect[0].status;
              this.updateNewsData.id=id;
              $('#modalEditar').modal('show')
            });
          });
    },
    updateNews(id){
      db.collection('news').doc(id).update({
        title:this.updateNewsData.title,
        extract:this.updateNewsData.extract,
        body:this.updateNewsData.body,
        status:this.updateNewsData.status
      }).then( ()=> this.getNews(), this.$swal('Noticia Actualizado Con Exito!'), $('#modalEditar').modal('hide'))

    },

    async addNew(){

      let response = db.collection("news").add({
        title:this.newNews.titulo,
        extract:this.newNews.resumen,
        body:this.newNews.cuerpo,
        image:'https://www.mexicodesconocido.com.mx/sites/default/files/nodes/inline/parque-nacional-cumbres-de-majalca-chihuahua-ng.jpg',
        status:'Activa',
        date:new Date(),
      }).then(()=> {if(response){db.collection('news')
                                    .doc(response.id)
                                    .update({ id: response.id })}}, this.getNews(), this.$swal('Noticia Guardada con exito!'), $('#modalReservacion').modal('hide')) 
    },
    deleteNews(id){

      this.$swal({
  title: '¿Realmente quieres eliminar esta noticia?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Eliminar`,
  denyButtonText: `Cancelar`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     db.collection('news').doc(id).delete().then(()=> this.getNews(), this.$swal('Eliminada!', '', 'success'));
    
  } else if (result.isDenied) {
    this.$swal('No se elimino la noticia', '', 'info')
  }
})
     
    }

  },
};
</script>

