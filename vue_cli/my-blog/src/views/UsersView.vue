<template>
  <section>
    <div class="container min-vh-100">
      <h4 class="text-center text-danger">Users Page</h4>
      <hr />
      <ProductsComponent />
      <hr />
      <br />

      <JeweleryComponent />
    </div>
  </section>
</template>

<script>
import ProductsComponent from "@/components/ProductsComponent.vue";
import JeweleryComponent from "@/components/JeweleryComponent.vue";

export default {
  component: { ProductsComponent, JeweleryComponent },
  setup(props) {},
};
</script>
