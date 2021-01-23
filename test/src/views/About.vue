<template>
    <div>
        <h2>About: {{title}} </h2>
        <button @click="emitToHome">About Click</button>
    </div>
</template>
<script>
import VueEvent from '../VueEvent.js'    
export default {
    name:"about",
    data() {
        return {
            title: "aboutTitle--"
        }
    },
    methods: {
        // 发数据用$emit
        emitToHome() {
            VueEvent.$emit("tohome", this.title)
        }
    }
}
</script>
<style>


</style>