<template>
    <section>
        <h1 class="p-2 bg-primary rounded text-center mx-5 ">Jobs</h1>
        <div class="row">
            <div class="col-6 offset-3">
                <div class="card my-2" v-for="job in jobs" :key="job.id" >
                    <div class="card-header">
                        <h5 class="text-center">{{ job.position }}</h5>
                    </div>
                    <div class="card-body d-flex justify-content-between">
                        <p>{{ job.name }}</p>
                        <span @click="hide(job)" class="btn btn-close"></span>
                    </div>
                    <div class="card-footer">
                        <router-link :to="{name:'jobDetail', params:{id: job.id,name:job.name,position:job.position}}">Detail Job</router-link>
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            jobs:[
            ]
        }
    },
    methods: {
        hide(job){
            this.jobs = this.jobs.filter(j => j != job)
        }
    },
    mounted() {
        try {
            fetch("http://localhost:7000/jobs")
            .then(response => response.json())
            .then(data=>this.jobs = data)
            .catch(err => console.log(err.message))
        } catch (error) {
            console.log(error.message);
        }
    },
}
</script>