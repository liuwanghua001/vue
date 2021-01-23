<template>
    <div>
        <h2>requests</h2>
        <el-table
            :data="tableData"
            style="width: 100%">
            
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="hware"
                label="高温"
                width="180">
            </el-table-column>
            <el-table-column
                prop="cloud"
                label="风级">
            </el-table-column>
        </el-table>
        <button @click="requestData">CLICK</button>
    </div>
</template>

<script>
export default {
    name: "request",
    data() {
        return {
          tableData: [],
          city: "长沙"
        }
    },
    mounted() {
        // this.axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' +this.city)
        // .then(res => {
        //     console.log(res.data.data)
        // })

        // console.log(this)
    },
    methods: {
        requestData: function() {
            this.axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(res => {
                // console.log(res.data.data)
                // this.forecast = res.data.data.forecast
                res.data.data.forecast.forEach(function(item, index) {  
                    // console.log("日期：",item.date)  
                    let tableDatas = {}
                    tableDatas.date = item.date      
                    tableDatas.hware = item.high     
                    tableDatas.cloud = item.fengxiang

                    this.tableData = tableDatas
                    // console.log(this.tableData)    
                    console.log("结果：",tableDatas)

                // console.log(item.fengli.split('A')[2])
                // console.log(item.fengli.split('A')[2].split("]]"))
                // console.log(item.fengli.split('A')[2].split("]]")[0].split("["))

                // console.log(item.fengli.split('A')[2].split("]]")[0].split("[")[1])
                }) 
                // console.log("昨天：",res.data.data.yesterday)
            })
        }
    }
}
</script>
<style>


</style>