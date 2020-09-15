<style>

</style>
<template>
  
</template>
<script>

import firebase from "firebase";
import { db } from "@/main"

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
