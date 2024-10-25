<template>
  <section>
    <h4 class="text-danger">{{ name }}</h4>
    <button class="btn btn-sm btn-success" @click="change">change</button>

 
  </section>
</template>

<script setup>

import { ref } from "vue";


const name = ref("Test component");
const change = () => {
  name.value = "change";
};
</script>
