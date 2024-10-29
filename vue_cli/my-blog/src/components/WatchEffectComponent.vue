<template>
  <section>
    <div class="conatiner-sm min-vh-100">
      <h2 class="p-2 rounded text-center text-white bg-primary my-2">
        Watch and WatchEffect
      </h2>
      <input
        type="text"
        v-model="name"
        class="form-control"
        placeholder="name"
      />
      <input
        type="text"
        v-model="email"
        class="form-control"
        placeholder="eamil"
      />
      <button class="btn btn-primary my-2" @click="stop">
        Stop Watch and watchEffext
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const name = ref("");
const email = ref("");

const stopWatch = watch(name, () => {
  console.log("name watch run!");
});

watch(email, () => {
  console.log("email watch run!");
});

const stopWatchEffect = watchEffect(() => {
  console.log("watchEffect run!", name.value, email.value);
});

const stop = () => {
  stopWatch();
  stopWatchEffect();
};
</script>
