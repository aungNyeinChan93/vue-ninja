<template>
  <section>
    <div class="container min-vh-100 my-3">
      <h1 class="p-2 bg-primary mx-4 text-white rounded text-center">
        Computed
      </h1>
      <div class="col-6 offset-3">
        <input type="text" class="form-control" v-model="search" />
        <ul class="my-2">
          <li v-for="customer in searchCustomers" :key="customer">
            {{ customer }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
console.log("setup");

import { computed, onMounted, onUpdated, ref } from "vue";

const customers = ref(["mgmg", "aungaung", "susu", "koko", "ayeaye"]);
const search = ref("");

const searchCustomers = computed(() => {
  return customers.value.filter((customer) => {
    return customer.includes(search.value);
  });
});

onMounted(() => {
  console.log("onmouted");
});

onUpdated(() => {
  console.log("onUpdate");
});
</script>
