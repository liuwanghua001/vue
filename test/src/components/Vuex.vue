<template>
    <div>
        <h2>{{ this.$store.state.city }}</h2>
        <button @click="checkOut">切换</button>
        <h3>Count: {{this.$store.state.count}}</h3>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
        <div>----------------------------------</div>
        <button @click="add1000">add1000</button>
        <button @click="reduce1000">reduce1000</button>

    </div>
</template>
<script>
import { mapState , mapMutations , mapActions , mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        // ... 将vuex中的公用属性city映射到计算属性city中    
        ...mapState({
            counts: (state) => state.count
        }),
        ...mapGetters({
            getternum: 'docount'
        })
    },
    created() {
        console.log(this)        
    },
    methods: {
        checkOut: function() {
            this.$store.dispatch('changeCity','株洲')            
        },
        ...mapMutations({
            addnum: 'SET_COUMT_ADD',
            reducenum: 'SET_COUMT_REDUCE'
        }),
        ...mapActions({
            addmore: 'ADD1000',
            reducemore: 'REDUCE1000'
        }),
        add() {
            this.addnum()
            console.log(this.counts, '+1')
        },
        reduce() {
            this.reducenum()
            console.log(this.counts, '-1')
        },
        add1000() {
            this.addmore()
            console.log(this.counts, '+1000')
        },
        reduce1000() {
            this.reducemore()
            console.log(this.counts, '-1000')
        }
    },
    mounted() {
        console.log(this.counts)
        console.log(this.$store.state.count)        
    }
}
</script>
<style>

</style>