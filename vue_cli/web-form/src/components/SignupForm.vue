<template>
    <section>
        <div class="container-sm p-4">
            <form @submit.prevent="formSubmit">
                <div class="card col-6 offset-3">
                    <div class="card-body">
                        <div class="my-2">
                            <input type="email" name="email" id="email" v-model="email" class="form-control" placeholder="email">
                        </div>
                        <div class="my-2">
                            <input type="password" name="password" id="password" v-model="password" class="form-control" placeholder="password">
                        </div>
                        <div class="my-2">
                            <select class="form-control" v-model="role">
                                <option value="developer">Web Developer</option>
                                <option value="designer" >Web Designer</option>
                                <option value="manager"> Manger</option>
                            </select>
                        </div>
                        <div class="my-2">
                            <label for="languages">Select Language</label> <hr>
                            <input type="checkbox" value="html" v-model="languages" class="mx-2">HTML
                            <input type="checkbox" value="css" v-model="languages" class="mx-2">CSS
                            <input type="checkbox" value="js" v-model="languages" class="mx-2">JS
                        </div>
                        <div class="my-3">
                            <input type="radio" name="male" value="male" v-model="gender" class="form-check d-inline mx-2 ">Male
                            <input type="radio" name="female" value="female" v-model="gender" class="form-check d-inline mx-2 ">Female
                        </div>
                        <div class="my-">
                            <Small for="">Add Skills</Small>
                            <input type="text" name="addSkills" id="addSkills" class="form-control" v-model="addSkill" @keyup="skillAdd">
                            <div class="card mt-2" >
                                <ul class=" list-group">
                                    <li class=" list-group-item" v-for="(skill,index) in skills" :key="index">{{ skill }}  <span @click="deleteSkill(skill)"  class="btn btn-close float-end"></span></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="my">
                            <input type="checkbox" name="term" id="term" class="form-check ms-1" v-model="check">
                            <small class="text-muted ">Accept Term and Condition</small>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-sm btn-success">Signup</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email:"",
            password:"",
            role:"developer",
            check:"",
            languages:[],
            gender:"",
            addSkill:"",
            skills:[]
        }
    },
    methods: {
        skillAdd(e){
            console.log(e.code);
            if(e.code === "Space" && this.addSkill != null){
               if(!this.skills.includes(this.addSkill)){
                this.skills.push(this.addSkill);
               }
                this.addSkill = ""
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter(s =>s != skill)
        },
        formSubmit(){
            console.log(this.email);
            console.log(this.password);
            console.log(this.role);
            console.log(this.check);
            console.log(this.languages);
            console.log(this.gender);
            console.log(this.skills);
            console.log(this.skills[0]);
            console.log("done");     
        }
    },
}
</script>