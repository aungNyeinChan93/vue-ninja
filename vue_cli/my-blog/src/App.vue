<template>
  <section>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'users' }">Users</router-link>
    <router-view></router-view>
    <TestRef />
    <ReactiveComponent /><br />
    <hr />
    <ComputedComponent />
    <br />
    <hr />
    <WatchEffectComponent />
    <br />
    <PostsComponents :posts="posts" />
    <br />
    <LifeCycleHookComponent />
    <br />
    <hr />
    <ProductsComponent />
    <hr />
    <br />
    <JeweleryComponent />
  </section>
</template>

<script setup>
import TestRef from "./components/Test-Ref.vue";
import ReactiveComponent from "./components/ReactiveComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import WatchEffectComponent from "./components/WatchEffectComponent.vue";
import PostsComponents from "./components/PostsComponents.vue";
import LifeCycleHookComponent from "./components/LifeCycleHookComponent.vue";
import ProductsComponent from "./components/ProductsComponent.vue";
import JeweleryComponent from "./components/JeweleryComponent.vue";

const posts = ["post-1", "post-2", "post-3"];
</script>
