import Vue from 'vue';
import App from './App'//引包

new Vue({
    el: '#root',
    components: {//声明App组件
        app:App,
    },
    template: '<app/>'//使用组件

})