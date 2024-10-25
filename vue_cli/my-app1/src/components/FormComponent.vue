<template>
    <section>
        
      <div id="ref" class="col-6 offset-3">
        <input type="text" name="name" id="name" ref="name" class="form-control" placeholder="name">
        <input type="email" name="email" id="email" ref="email" class="form-control" placeholder="email">
        <input type="password" name="password" id="password" v-model="password" class="form-control" placeholder="password">
        <button class="btn btn-sm btn-primary" @click="handle">Submit</button>
      </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            password:null,
        }
    },
    methods: {
        handle(){
            console.log(this.$refs.name.value,this.$refs.email.value,this.password);
        }
    },
}
</script>