<template>
    <div class="cart">
        <Header title="购物车" :isedit="true"></Header>
        <CartDetail v-if="isShow"></CartDetail>
        <Blank v-else></Blank>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import Header from '@/components/Header.vue';
import CartDetail from './components/CartDetail.vue';
import Blank from '@/components/Blank.vue';
import { useStore } from 'vuex';
import { onMounted, ref} from "vue";
export default { 
    components: {
        Footer,
        Header,
        CartDetail,
        Blank,
    },
    setup(){
        const store = useStore();
        let isShow = ref(true);

        const init = () =>{
            if(store.state.cartList.length === 0){
                isShow.value = false;
            }
        };
        onMounted(()=>{
            init();
        });

     return {
        store,
        isShow,
     }
    }
}
</script>

 
<style lang='less' scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>