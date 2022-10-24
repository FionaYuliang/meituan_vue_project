<template>
    <Header title="新增地址"></Header>
    <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
    />
</template>
<script>
   import { reactive, toRefs } from 'vue';
   import Header from '../../components/Header.vue';
   import { useStore }  from 'vuex';
   import { area } from 'vant';
   import { useRouter } from 'vue-router';
   
    
   export default { 
       components: { Header },
       setup(){
           const store = useStore();
           const router = useRouter();
           let data = reactive({
            areaList: {
                province_list: {
                    110000: "北京市",
                    120000: "山东省",
                },
                city_list: {
                    110100: "济南市",
                    110200: "青岛市",
                    120100: "烟台市",
                    120200: "威海市",
                },
                county_list: {
                    110101: "市南区",
                    110102: "市北区",
                    120102: "崂山区",
                    130102: "李沧区",
                },
      },
           });


           //保存地址
           const onSave = (info) => {

           };

           //删除地址
           const onDelete = () => {

            };
   
           return {
               ...toRefs(data),
               store,
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
