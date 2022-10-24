<template>
    <Header :title = "addresstitle"></Header>
    <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-delete
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
    />
</template>
<script>
   import { onMounted, reactive, toRefs } from 'vue';
   import Header from '../../components/Header.vue';
   import { useStore }  from 'vuex';
   import { useRouter, useRoute } from 'vue-router';
   import { computed } from '@vue/reactivity';
   import { Toast } from 'vant';

   
    
   export default { 
       components: { Header },
       setup(){
           const store = useStore();
           const router = useRouter();
           const route = useRoute();

           let data = reactive({
            areaList: {
                province_list: {
                    110000: "北京市",
                    120000: "山东省",
                },
                city_list: {
                    110100: "北京市",
                    110200: "郊区",
                    120100: "济南市",
                    120200: "济宁市",
                },
                county_list: {
                    110101: "海淀区",
                    110102: "朝阳区",
                    120102: "历下区",
                    130102: "槐荫区",
                },
            },
            addressInfo : {},
          
           });

           const addresstitle = computed(()=>{
            return route.query.type === 'add' ? "新增地址" : "编辑地址";
           })

           //页面初始化
           const init = () => {
            store.state.userAddress.forEach((item)=>{
                if(item.id === Number(route.query.id)){
                    data.addressInfo = item;
                }
            });
           };

           onMounted(()=>{
            init();
           });

           //保存地址
           const onSave = (item) => {
                if(route.query.type ===  'add'){
                    store.commit("ADDNEWADDR",item);
                    Toast("添加成功");
                }else if(route.query.type === 'edit'){
                    store.commit("CHANGEADDR",item);
                    Toast("修改成功");
                }else {
                    Toast.fail('参数错误');
                }
                setTimeout(() =>{
                    router.back();
                },1000);

           };

           //删除地址
           const onDelete = (item) => {
                store.commit("DELETEADDR",item);
                Toast("删除成功");
                setTimeout(() =>{
                    router.back();
                },1000);
            };
   
           return {
               ...toRefs(data),
               store,
               addresstitle,
               onMounted,
               onSave,
               onDelete, 
              
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
</style>
