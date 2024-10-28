<template>
  <section>
        <div class="container" v-if="customers.length">
            <div class="card col-4 offset-4" v-for="customer in customers" :key="customer.id" >
                <div class="card header" >
                    {{ customer.id }} || {{ customer.name }}
                </div>
                <div class="card-body">
                    <p>{{ customer.age }} || {{ customer.gender }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading ...!</p>
        </div>
  </section>
</template>

<script>
export default {
    props:["id"],
    data() {
        return {
            customers:[]
        }
    },
    mounted() {
        fetch('http://localhost:7000/customers/?id='+this.id)
        .then(res=>res.json())
        .then(data=>this.customers =data)
        // .then(data =>this.customers =  data.filter((item) => {  
        //     return item.id === parseInt(this.id) 
        // }))
    },
}
</script>

<style>

</style>