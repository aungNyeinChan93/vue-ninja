<template>
  <section>
    <h2>Job Detail</h2>
      <div class="card col-6 offset-3">
        <div class="card-header">
            {{ id }}  | {{ name }} 
        </div>
        <div class="card-body">
          {{ position }}
        </div>
        <div class="card-footer">
          <button class="btn btn-sm btn-primary ">
            <router-link class="text-white text-decoration-none" :to="{name:'jobs'}">Back</router-link>
          </button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  props:["id","position"],
  data() {
    return {
      // id:this.$route.params.id,
      name:this.$route.params.name
    }
  },
}
</script>

<style>

</style>