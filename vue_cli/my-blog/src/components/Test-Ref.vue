<template>
  <section>
    <div class="container">
      <h1 class="card p-2">My name is {{ name }} and Email :: {{ email }}</h1>
      <div class="btn btn-sm btn-secondary" @click="change">change</div>
      <p>Customer name {{ customers.name }} || {{ customers.age }}</p>

      <p>user name is {{ users[0].name }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("mgmg");
const email = ref("mgmg@gamil.com");
const customers = ref({ name: "chan", age: 20 });
const users = ref([
  { name: "koko", age: 20 },
  { name: "zawzaw", age: 22 },
]);

const change = () => {
  name.value = "susu";
  email.value = "susu@gmail.com";
  customers.value.name = "anc";
  customers.value.age = 31;
  users.value[0].name = "ancanc";
};
</script>
