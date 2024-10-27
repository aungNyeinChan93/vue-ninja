<template>
    <section>
        <div class="container">
            <div class="card" >
                <div class="card-header" @click="close">
                    <h4>Model</h4>
                </div>
                <div class="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, atque?</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
      methods:{
        close(){
            console.log("dsfas");
            this.$emit("close_model")
        }
      }  
}
</script>