<template>
  <section>
      <div class="text-center">
        <button class="btn btn-danger" @click="changeStatus">{{ status }}</button>
      </div>
      <br>
      <TestComponent smt="hello test" />
      <hr />
      <FormComponent />
      <br />
      <CardComponent title="Hello world!" @mess_alertr="alert_mess" />
      <br />
      <TestTwo key="this is key" />
      <br />
      <div v-if="status">
        <ModelComponent @close_model="closeModel" />
      </div>
      <br />
      <br>
      
      <div v-show="status"> 
        <LayoutComponent @closeEvent="close_event" testProps="this is test props">
          <template v-slot:header>
            <h4>This is Header</h4>
          </template>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi laudantium dolore repudiandae at sunt.</p>
          <template v-slot:footer>
            <h5 class="text-danger"> This is footer</h5>
          </template>
          <p>This is sec slot text</p>
        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sit soluta atque?</small>
        </LayoutComponent>  
      </div>

      <br>

      <teleport to="#tele-1" v-if="status">
        <TeleportComponent/>
      </teleport>

      <teleport to="#tele-2" v-if="status">
        <TeleportComponent/>
      </teleport>

  </section>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TestComponent from "./components/TestComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import TestTwo from "./components/TestTwo.vue";
import ModelComponent from "./components/ModelComponent.vue";
import LayoutComponent from "./components/LayoutComponent.vue";
import TeleportComponent from "./components/TeleportComponent.vue";

export default {
  name: "App",
  components: {
    TestComponent,
    FormComponent,
    CardComponent,
    TestTwo,
    ModelComponent,
    LayoutComponent,
    TeleportComponent
  },
  data() {
    return {
      title: "vue 3 ",
      status: false,
    };
  },
  methods: {
    change() {
      this.title = "vue 3 composition API";
    },
    changeStatus() {
      this.status = !this.status;
    },
    closeModel() {
      this.status = !this.status;
    },
    alert_mess(){
      alert("testing")
    },
    close_event(){
      this.status = !this.status
    }
  },
};
</script>
