<template>
  <section>
    <LayoutComponent>
       <div class="btn btn-group">
        <button class="btn btn-sm btn-danger" @click="redirect">Redirect</button>
        <button class="btn btn-sm btn-warning" @click="back">Go Back</button>
        <button class="btn btn-sm btn-success" @click="forward">Go Forward</button>
       </div>
    </LayoutComponent>
  </section>
</template>

<script>
import LayoutComponent from './components/LayoutComponent.vue';



export default {
  components:{
    LayoutComponent,
  },
  methods: {
    redirect(){
      this.$router.push({name:'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(+1)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
