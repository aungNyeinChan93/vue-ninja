<template>
  <section>
    <div class="container min-vh-100">
      <h4 class="text-center p-2 rounded bg-success">Jewelery</h4>

      <div v-if="error">
        <span>{{ error }}</span>
      </div>
      <div v-else>
        <div v-if="jewelery.length">
          <ul>
            <li v-for="j in jewelery" :key="j">{{ j.title }}</li>
          </ul>
        </div>
        <div v-else>
          <small class="text-danger"> Loading ...!</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getJewelery from "@/helperFunctions/getJewelery";
import { onMounted } from "vue";

export default {
  setup(props) {
    const { jewelery, error, dataFetching } = getJewelery();

    onMounted(() => {
      dataFetching();
    });

    return { jewelery, error };
  },
};
</script>
