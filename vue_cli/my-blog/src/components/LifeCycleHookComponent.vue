<template>
  <section>
    <div class="container-sm min-vh-100">
      <h2 class="p-1 rounded bg-danger text-white text-center my-2">
        Life cycle hook
      </h2>
      <p v-show="status">
        <span ref="parag">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          magnam.
        </span>
      </p>
      <button @click="showHide" class="btn btn-sm btn-danger">Toogle</button>
      <button @click="change" class="btn btn-sm btn-danger mx-2">Change</button>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

export default {
  setup() {
    const status = ref("true");
    const parag = ref("");

    const showHide = () => {
      status.value = !status.value;
    };
    const change = () => {
      //   console.log(parag.value);
      parag.value.innerHTML = "change";
    };
    onMounted(() => {
      console.log("onmouted hook!");
    });

    onUnmounted(() => {
      console.log("onUnmounted hook!");
    });

    onUpdated(() => {
      console.log("onUpdated hook!");
    });

    return { status, showHide, parag, change };
  },
};
</script>
