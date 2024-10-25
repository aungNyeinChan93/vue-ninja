const alert = Vue.createApp({
    data() {
        return {
            name:"alert"
        }
    },
    methods: {
        alertMess(){
            console.log("alert");
          
            
        }
    },
})

alert.mount("#alert")