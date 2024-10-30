<template>
  <section>
    <div class="container min-vh-100">
      <h4 class="text-center text-danger">Users Page</h4>
      <hr />
      <ProductsComponent />
    </div>
  </section>
</template>

<script>
import ProductsComponent from "@/components/ProductsComponent.vue";

export default {
  component: { ProductsComponent },
  setup(props) {},
};
</script>
