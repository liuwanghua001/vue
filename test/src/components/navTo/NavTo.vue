<template>
    <div class="navto">
        <h2>Nav address dump</h2>
        <ul class="nav">
            <li @click="seeMachine"
            :id="nav.typeId"
            :key="index"
            v-for="(nav, index) in navs"
            :class="nav.currLi"
            >
            {{nav.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navs: [
                {title:"HOME",path:'/home/second',typeId:'1',className:'currLi'},
                {title:"客服",path:'/home/second',typeId:'2',className:'currLi'},
                {title:"机型",path:'/home/second',typeId:'3',className:'currLi'},
                {title:"其它",path:'/home/second',typeId:'4',className:'currLi'},
            ]
        }
    },
    methods: {
        seeMachine: function(event) {
            console.log("--event--:",event)
            let el = event.currentTarget //这样是获取当前点击的元素
            console.log("el----:",el)
            let type = el.getAttribute("id") //这样就可以获取当前元素的id属性值
            console.log("type---:",type)
            let a = [] //声明一个空数组，用来存放当前点击元素的所有的兄弟元素，用来实现只给当前点击的元素动态加背景色
            let p = el.parentNode.children
            for(let i = 0; i< p.length; i++) {
                p[i].classList.remove("currLi")
            }
             // 循环是实现给当前元素的兄弟元素去除currLi类，实现只有当前点击元素有背景色
            event.currentTarget.classList.add("currLi")
            // this.$router.push({path:'/home/machineType',query:{type:type}})
        }
    }
}
</script>
<style scoped>
.currLi{background:blue;color:#fff;}
</style>