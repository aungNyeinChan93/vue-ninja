<template>
  <section>
    <div class="container min-vh-100">
      <h1 class="text-center p-1 bg-success rounded text-white">Products</h1>
      <!-- error -->
      <div v-if="error">
        <div class="alert alert-danger text-center">
          {{ error.toUpperCase() }}
        </div>
      </div>
      <div v-else>
        <!-- non-error -->
        <div v-if="products.length">
          <div v-for="product in products" :key="product">
            <div class="card my-2">
              <div class="card-header">{{ product.title }}</div>
              <div class="card-body">{{ product.description }}</div>
            </div>
          </div>
        </div>
        <!-- loading -->
        <div v-if="!products.length">
          <div class="alert alert-success text-center">
            <small class="h3">Loading .... !</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    const products = ref([]);
    const error = ref(null);

    const dataFetching = async () => {
      try {
        const response = await fetch("http://localhost:4000/product");
        if (!response.ok) {
          throw Error("posts data not avaliable now!");
        }
        products.value = await response.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return { products, error, dataFetching };
  },
  mounted() {
    this.dataFetching();
  },
};
</script>
