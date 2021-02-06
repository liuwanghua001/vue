<template>
    <div class="pane" v-show="show">
        <ul :class="{tabbox:ulName}">
            <li v-for="(item, index) in items"
            :key="index"
            :class="{act:index===num,tabli:liName}"
            @click="tab(index)">
            {{item.message}}
            </li>
        </ul>
        <ul>
            <li v-for="(tab, index) in tabBox"
            :key="index"
            v-show="index===num"
            >
            内容：{{tab.message1}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            TabList:[
                {
                    message:"地理",
                    contentList:[
                        {message1:'地理学是研究地球表面的地理环境中各种自然现'}
                    ]
                },
                {
                    message:"人文历史",
                    contentList:[
                        {message1:'金字塔是什么结构'}
                    ]
                },
                {
                    message:"地图",
                    contentList:[
                        {message1:'高德地图API'}
                    ]
                }
            ],
            items:[
                    {message:"地理"},
                    {message:"人文历史"},
                    {message:"地图"}
            ],
            tabBox:[
                {message1:'地理学是研究地球表面的地理环境中各种自然现'},
                {message1:'人文历史'},
                {message1:'高德地图API'}
            ],
            num:0,
            liName:true,
            show:true,
            ulName:true            
        }
    },
    methods: {
        tab: function(index) {
            console.log(index)
            this.num = index
        }
    }
}
</script>
<style scoped>
.act{color:red;}
li{list-style: none;}
.tabbox{display: -webkit-flex;display: flex;}
.tabli{width: 200px;background: lightblue; height: 34px;
line-height: 34px;align-items: center;text-align:center;}
</style>>

</style>