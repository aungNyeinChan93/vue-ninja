<template>
    <section>

        <router-view></router-view>
        <TestRef/>
        <ReactiveComponent/>

    </section>
</template>


<script setup >
import TestRef from './components/Test-Ref.vue';
import ReactiveComponent from './components/ReactiveComponent.vue';


</script>

