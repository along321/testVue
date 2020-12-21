<template>
  <li>
      <h3>{{blog.title}}</h3>
  </li>
</template>

<script>
//一个组件相当于一个vm
export default {
    //声明接受对象
    //接受的所有标签都是组件对象的属性
    props:['blog']
}
</script>

<style>

</style>