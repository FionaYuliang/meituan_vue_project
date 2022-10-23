<template>
    <div class="order">
       <Header title="新增地址"></Header>
       <div class="content">
         
       </div>
    </div>
   </template>
   <script>
   import { reactive, toRefs } from 'vue';
   import Footer from '../../components/Footer.vue';
   import Header from '../../components/Header.vue';
   import Blank from '../../components/Blank.vue';
   import { useStore }  from 'vuex';
    
   export default { 
       components: {
       Footer,
       Header,
       Blank
   },
       setup(){
           const store = useStore();
           let data = reactive({
               
           });
   
           return {
               ...toRefs(data),
               store,
               
           }
       }
   }
   </script>
   