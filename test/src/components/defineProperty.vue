<template>
    <div>
        <h1 ref="testVal">这是一个测试</h1>
        <button @click="definePropertyTest">defineProperty</button>
    </div>
</template>
<script>

export default {
    name:"defineProperty",
    data() {
        return {

        }
    },
    methods: {
        definePropertyTest: function() {
            let testVal = this.$refs.testVal
            console.log("获取DOM", testVal.textContent)
            let data = {}
            let i = 0
            Object.defineProperty(data, "b", {
                // 当data.b的值发生变化时，更新testVal的值
                set: newValue => {
                    testVal.textContent = newValue
                },
                get: res => {
                    console.log("获取：", res)
                }
            })
            setTimeout(res => {
                i++
                data['b'] = "data.b视图更新，"+ i
            }, 3000)
        }
    }
}
</script>
