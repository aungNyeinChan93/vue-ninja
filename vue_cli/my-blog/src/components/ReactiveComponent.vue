<template>
    <section class="my-3">
        <hr>
        <h1>Reactive hook</h1>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.password }}</p>
 
        <button class="btn btn-sm btn-danger" @click="change">Change</button>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

    const user = reactive({
        name:"null",
        email:"null",
        password:"null"
    })

    const change=()=>{
        user.name = "mgmg";
        user.email = "mgmg@email.com";
        user.password = "123123";
    }
</script>