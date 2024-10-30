<template>
  <section>
    <div class="container-sm min-vh-100">
      <h1 class="p-2 bg-primary text-center text-white rounded my-2">Posts</h1>
      <ul>
        <li v-for="post in changePost" :key="post">
          {{ post }}
          <SinglePostComponent :post="post" />
        </li>
      </ul>
      <div>
        <h1>LowerCase</h1>
        <span v-for="p in lowerCase" :key="p">{{ p }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
  components: {
    SinglePostComponent,
  },
  props: ["posts"],
  setup(props) {
    console.log(props);

    const changePost = computed(() => {
      return props.posts.map((post) => (post = "this is added title"));
    });

    const lowerCase = computed(() => {
      return props.posts.map((p) => p.toUpperCase());
    });

    return { changePost, lowerCase };
  },
};
</script>
