<template>
 <div class="order">
    <Header title="订单"></Header>
    <div class="content">
        <van-tabs v-model:active="active">
            <van-tab v-for="i in orderLabel" :title="i">
                <div v-for="i in store.state.orderedList" 
                v-if="i === '全部' && store.state.orderedList.length">
                    <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic"/>
                </div>
                <Blank v-else></Blank>
            </van-tab>
        </van-tabs>
    <Footer></Footer>
    </div>
 </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import Footer from '../../components/Footer.vue'
import Header from '@/components/Header.vue';
import { useStore }  from 'vuex';
import Blank from '@/components/Blank.vue'; 
export default { 
    components: {
    Footer,
    Header,
    Blank
},
    setup(){
        const store = useStore();
        let data = reactive({
            orderLabel:["全部","交易完成","待付款","待发货","已发货","已取消"],
        });

        return {
            ...toRefs(data),
            store,
            
        }
    }
}
</script>

<style lang='less' scoped>
.order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>