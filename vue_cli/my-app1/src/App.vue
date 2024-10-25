<template>
    <section>
      <TestComponent smt="hello test"/>
      <hr>
      <FormComponent/>
      <br>
      <CardComponent title="Hello world!"/>
      <br>
      <TestTwo key="this is key"/>
    </section>
</template>

<script >
import FormComponent from './components/FormComponent.vue';
import TestComponent from './components/TestComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import TestTwo from './components/TestTwo.vue';

export default {
  name: 'App',
  components: {
    TestComponent,
    FormComponent,
    CardComponent,
    TestTwo
  },
  data(){
    return{
      title:"vue 3 ",
    }
  },
  methods:{
    change(){
      this.title = "vue 3 composition API"
    },
  }
}
</script>


