<template>
  <section>
    <div class="container p-4">
      <div class="card">
        <div class="card-header">
          <h4>{{ title }}</h4>
        </div>
        <div class="card-bod">
          <p @click.ctrl="alert_mess">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            laborum, dolor amet doloribus exercitationem iure optio illum totam
            cumque odio eveniet perspiciatis ducimus accusantium natus adipisci
            aliquid. Molestias, beatae alias?
          </p>
        </div>
        <div class="card-footer">
            this is footer
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props:["title"],
    methods: {
      alert_mess(){
        this.$emit("mess_alertr")
      }
    },
};
</script>

<style scoped></style>