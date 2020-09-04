<style>
.row {
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
  width: 100%;
}
.main-container *{
    padding: 0;
    margin: 0;
}

.btn-ver-mas-2{
    background-color: #707070;
    color: white;
    border-color: #707070;
    border-radius: 10px;
    padding: 2px 10px;
    border-style: solid;
}

.contacto{
    margin-top: 1em;
    box-shadow: 3px 3px 10px #BFBFBF;
    padding: 20px 10%;
}

.contacto input {
	width: 100%;
	margin-top: 10px;
	min-height: 10px;
	border: none;
	border: 1px solid black;
	padding: 10px;
}

.contacto textarea{
    width: 100%;
    margin-top: 10px;
    border: none;
    border: 1px solid black;
    padding: 10px;
}
</style>

<template>
    <section class="main-container">
            <section class="row">
                <div class="col-md-2" />
                <div class="col-md-8 contacto">
                    <form action="#">
                        <div class="col-md-12">
                            <input type="text" placeholder="Nombre" v-model="form.name" >
                        </div>
                        <div class="col-md-12">
                            <input type="text" placeholder="Apellido Paterno" v-model="form.email" >
                        </div>
                        <div class="col-md-12">
                            <input type="text" placeholder="Apellido Materno" v-model="form.information">
                        </div>
                        <div class="col-md-12">
                            <input type="email" placeholder="Correo" v-model="form.information">
                        </div>
                        <div class="col-md-12">
                            <input type="password" placeholder="Contraseña" v-model="form.information">
                        </div>
                        <div class="col-md-12">
                            <input type="password" placeholder="Confirmar Contraseña" v-model="form.information">
                        </div>
                        <div class="col-md-12">
                            <input type="text" placeholder="Telefono" v-model="form.information">
                        </div>
                        <div class="col-md-12">
                            <input type="text" placeholder="Turno" v-model="form.information">
                        </div>
                        <div class="col-md-12 d-flex justify-content-end align-items-center">
                            <button type="submit" class="btn btn-ver-mas-2" href="#" style="width: 100%;">Registrar</button>
                        </div>
                    </form>
                </div>
            </section>
    </section>
</template>

<script>
export default {
    name: 'Contact-form',

    data(){
        return{
            form: {
                name: '',
                email: '',
                quieres: '',
                message: '',

            }
        }
    }
}
</script>
