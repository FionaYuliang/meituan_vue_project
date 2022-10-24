<template>
<Header title="地址管理"></Header>
<van-address-list
    v-model="chosenAddressId"
    :list="addresslist"
    :disabled-list="disabledList"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
/>
   </template>
   <script>
   import { onMounted, reactive, toRefs }  from 'vue';
   import Header from '../../components/Header.vue';
   import { useStore }  from 'vuex';
   import { useRouter} from 'vue-router';
    
   export default { 
       components: {Header },
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
            //如何把默认的放在第一个
            // data.addresslist.map((item)=>{
            //   if(item.isDefault){

            //   }
            // })
           };

           onMounted(()=>{
            init();
           });

           const onAdd = () => {
            router.push({
              path:'/addressedit',
              query: {
                type: 'add',
              }
            });
           };

           const onEdit = (item) => {
            console.log(item);
            router.push({
              path:'/addressedit',
              query: {
                type: 'edit',
                id: item.id,
              }
            });
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
   