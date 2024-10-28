<template>
  <section>
    <div class="container">
        <h4>Customers</h4>
        <div class="col-8 offset-2">
            <table class=" table table-bordered table-hover ">
                <thead class='bg-primary p-2'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.age }}</td>
                        <td>{{ customer.gender }}</td>
                        <td>
                            <button class="btn btn-sm btn-info mx-1">
                                <router-link :to="{name:'customerDetail',params:{id:customer.id}}" class=" text-decoration-none text-black">View</router-link>
                            </button>
                            <!-- <button class="btn btn-sm btn-warning mx-1">Edit</button> -->
                            <button @click="deleteAction(customer)" class="btn btn-sm btn-danger mx-1">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            customers:[]
        }
    },
    mounted() {
        const dataFetching = async ()=>{
            let response = await fetch("http://localhost:7000/customers");
            let data = await response.json();
            this.customers = data;
            // console.log(data);
            
        };
        dataFetching();
    },
    methods: {
        deleteAction(customer){
            this.customers = this.customers.filter(c=> c!= customer);
        },

    },
}
</script>

<style>

</style>