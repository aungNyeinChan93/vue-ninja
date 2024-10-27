<template>
    <div>
        <div class="container" @click.shift="close"  >
            <h1 class="p-2 rounded text-center bg-primary  "> Slot </h1>
            <div class="card" >
                <div class="card-header" :class="{'bg':layout_status}" >
                    <slot name="header"></slot>
                </div>
                <div class="card-body" :class="{'bg-success':layout_status}">
                    <slot>Default</slot>
                </div>
                <div class="card-footer" @click="layout_status = !layout_status">
                    <slot name="footer"></slot>
                </div>

                <div class="alert alert-success">
                    <span :class="{'bg-warning':layout_status}">{{ testProps }}</span>
                </div>
            </div>
            <div id="tele-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:["testProps"],
    data() {
        return {
            layout_status : false
        }
    },
    methods: {
        close(){
            this.$emit("closeEvent")
        }
    },
}
</script>


<style>
    .bg{
       background: red !important;
    }
</style>