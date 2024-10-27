<template>
  <section>
      <h1 class="text-center p-2 rounded my-2">Web-Form</h1>
      <SignupForm/>
  </section>
</template>

<script>
import SignupForm from './components/SignupForm.vue';



export default {
  name: 'App',
  components: {
    SignupForm,
  }
}
</script>


