<template>
    <div class="order">
       <Header title="地址管理"></Header>
       <div class="content">
        <van-address-list
            v-model="chosenAddressId"
            :list="addresslist"
            :disabled-list="disabledList"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
        />
       </div>
    </div>
   </template>
   <script>
   import { onMounted, reactive, toRefs } from 'vue';
   import Footer from '../../components/Footer.vue';
   import Header from '../../components/Header.vue';
   import Blank from '../../components/Blank.vue';
   import { useStore }  from 'vuex';
    import { useRouter } from 'vue-router';
import { timeEnd } from 'console';
    
   export default { 
       components: {
       Footer,
       Header,
       Blank
   },
       setup(){
           const store = useStore();
           const router = useRouter();
           let data = reactive({
            addresslist:[],
           });

           const init = () => {
            data.addresslist = store.state.userAddress.map((item)=>{
                return {
                    id: item.id,
                    name: item.name,
                    tel: item.tel,
                    address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
                    isDefault: item.isDefault,
                }
            });
           };

           onMounted(()=>{
            init();
           });

           const onAdd = () => {
            router.push('/addressedit');
           };

           const onEdit = () => {
            router.push('/addressedit');
            };
   
           return {
               ...toRefs(data),
               store,
               onAdd,
               onEdit,
           }
       }
   }
   </script>
   <style lang='less' scoped>
   /deep/ .van-button--danger {
     background-color: #ffc400;
     border-color: #ffc400;
   }
   /deep/ .van-switch--on {
     background-color: #ffc400;
   }
   /deep/ .van-radio__icon {
     display: none;
   }
   </style>
   