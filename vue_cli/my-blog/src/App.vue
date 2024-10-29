<template>
  <section>
    <router-view></router-view>
    <TestRef />
    <ReactiveComponent /><br />
    <hr />
    <ComputedComponent />
  </section>
</template>

<script setup>
import TestRef from "./components/Test-Ref.vue";
import ReactiveComponent from "./components/ReactiveComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
</script>
