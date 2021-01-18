<template>
    <div>
        <h2>Home: {{title}}</h2>
    </div>
</template>
<script>
    import VueEvent from '../VueEvent.js'
    export default {
        name: "home",
        data() {
            return {
                title:"HomeTitle componetes"
            }
        },
        mounted () {
            // 接收数据用$on
            VueEvent.$on("tohome", function(data) {
                // about组件传替给了hom组件
                console.log("Home组件接收数据用$on:----",data)
                // this.title = data
                // console.log(this.title)
            })
        }
    }
</script>
<style>

</style>