<template>
  <section>
    <router-view></router-view>
    <TestRef />
    <ReactiveComponent /><br />
    <hr />
    <ComputedComponent />
    <br />
    <hr />
    <WatchEffectComponent />
  </section>
</template>

<script setup>
import TestRef from "./components/Test-Ref.vue";
import ReactiveComponent from "./components/ReactiveComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import WatchEffectComponent from "./components/WatchEffectComponent.vue";
</script>
