<template>
    <div>
        <h2>{{title}}</h2>
        <blogs/>
    </div>
</template>
<script>
import blogs from './components/blogs.vue'
export default {
  components: { blogs },
    data(){
        return{
            title:'App组件1111'
        }
    },
    components:{
        blogs
    }
}
</script>

<style>

</style>