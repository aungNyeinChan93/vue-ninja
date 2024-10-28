<template>
    <section>
        <div class="container">
            <nav>
                <ul  class=" navbar nav-link d-flex justify-content-around">
                    <li class=" nav-link ">
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li class=" nav-item">
                        <router-link v-bind:to="{name:'about'}">About</router-link>
                    </li>
                    <li class=" nav-item">
                        <router-link v-bind:to="{name:'customers'}">Customers</router-link>
                    </li>
                    <li class=" nav-item">
                        <router-link :to="{name:'jobs'}">Jobs</router-link>
                    </li>
                </ul>
            </nav>
            <main>
                <slot></slot>
            </main>
        </div>
        <router-view/>
    </section>
</template>

<script>
export default {
    
}
</script>