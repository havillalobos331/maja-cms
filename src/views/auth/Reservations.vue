<style>

</style>
<template>
<div>

<table style="width:100%">
    <tr>
        <th>Nombre</th>
        <th>Área</th>
        <th>Fecha Entrada</th>
        <th>Fecha Salida</th>
    </tr>
    <tr v-for="reservation in reservations" :key="reservation.id">
        <td>{{reservation.user}}</td>
        <td>{{reservation.ubication}}</td>
        <td>{{reservation.dateOne}}</td>
        <td>{{reservation.dateTwo}}</td>
    </tr>
</table>
  
</div>

</template>
<script>


import firebase from "firebase";
import { db } from "@/main";



export default {

data(){
return{
    reservations:[],
    userSelect: '',
   
        
}
},
mounted(){

        this.getReservations()
    },
methods:{
    async getReservations(){
            this.reservations = []
            try {
                let response = await db.collection('reservations')
                                                .get()
                                                .then((doc) => {
                                                    doc.forEach((res) => {
                                                        console.log(res.data());
                                                        this.reservations.push(res.data())
                                                    })
                                                })

                if(this.userSelect != ''){
                    this.userSelect = this.users.find((doc) => {
                        return this.userSelect.uid = doc.uid
                    })

                    console.log(this.userSelect)
                }
            } catch (error) {
                console.log(error)
            }
            
        },
}
}
</script>
