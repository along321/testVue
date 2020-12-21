<template>
    <div>
        <h2>blogs</h2>
        <ul>
          <blog v-for="blog in blogs1" :key="blog.id" :blog="blog"/>
        </ul>
    </div>
</template>
<script>
import blog from './blog'
export default {
    data() {
        return {
            blogs1: [
                {'id':'1','title':'blog1'},
                {'id':'2','title':'blog2'},
                {'id':'3','title':'blog3'} 
            ]
        }
    },
    components:{
        blog
    }
}
</script>
<style scoped>
  h2 {
      color: red;
  }
</style>