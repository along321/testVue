<template>
    <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
      
      
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
    components:{
        Header,
        List,
        Footer
    }

}
</script>

<style>

</style>