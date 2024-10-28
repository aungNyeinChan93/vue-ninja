<template>
  <div class="home">
    <h1>Home</h1>
    <div class="container">
        <h4 ref="name" class="text-center p-2 bg-success rounded mx-4 text-white">My Blog</h4>
        <p class="text-center text-danger h4">{{ userName }}</p>
        <button class="btn btn-sm btn-info " @click="change"> Change </button>
    </div>

  </div>
</template>


<script setup>

  import { ref } from 'vue';

    const name = ref('my-blog');
    const userName = ref("mgmg");
    
    const change= ()=>{
      console.log(name,name.value);
      name.value.textContent = "hello world"
      userName.value = "susu"
    }

</script>
