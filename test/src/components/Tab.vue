<template>
    <div class="tab">
        <ul>
            <li @click="toggle(index)" :key="index" v-for="(tab, index) in tabs" :class="{active:active==index}">
                {{tab.type}}
            </li>
        </ul>
        <div class="content">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            tabs: [
                {
                    type: 'tab1',
                    view:"内容1"
                },
                {
                    type: 'tab2',
                    view:"内容2"
                },
                {
                    type: 'tab3',
                    view:"内容3"
                }
            ]
        }
    },
    methods: {
        toggle(i) {
            this.active = i
        }
    }
}
</script>
<style scoped>
.active{background:red;color:#fff;font-weight:bold;font-size:24px;}
ul{width:300px;display:flex;height:30px;line-height:30px;text-align:center;margin: 100px auto;}
ul li{flex:1;cursor:pointer;}
</style>