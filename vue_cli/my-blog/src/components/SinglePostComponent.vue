<template>
  <section>
    <p class="text-danger">{{ singlePost }}</p>
  </section>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    // console.log(props.post);

    const singlePost = computed(() => {
      return (props.post = "this is single post");
    });

    return { singlePost };
  },
};
</script>
