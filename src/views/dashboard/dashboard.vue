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
  background-image: url('');
}
p{
  margin: 0 10px;
}
</style>
<template>
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
</template>
<script>
</script>
