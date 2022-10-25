<template>
    <div class="store_details">
        <Header title="店铺"></Header>
        <div class="content">
            <div class="img"></div>
            <div class="food_classify">
                <div class="name">
                    {{ title }}
                    <img :src="img" class="store_img" />
                </div>
                <div class="classify">
                    <van-tabs color="#ffc400">
                        <van-tab v-for="(i, index) in shopData" :title="i.name" :key="index">
                            <FoodList :index="index" :foodData="i.data"></FoodList>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <van-action-bar>
          <van-action-bar-icon icon="chat-o" text="客服" @click="service"/>
          <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="toCart"/>
          <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart"/>
          <van-action-bar-button type="danger" text="立即购买" @click="buyAction"/>
        </van-action-bar>
    </div>
</template>


<script>
import { Toast } from 'vant';
import { onMounted, reactive,toRefs } from 'vue';
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue';
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import { getShopData } from '../../request/api';
export default {
    components :{
    Header,
    FoodList,
},
    setup(){
      const store = useStore();
      const router = useRouter();
      const route = useRoute();
      let data = reactive({
        shopData: [],
        title: '',
        img: '',
      });

      // 数据的请求
    const getShop = () => {
      getShopData().then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          res.data.data.forEach((i) => {
            console.log(route.query.title, i.title);
            if (i.title === route.query.title) {
              data.title = i.title;
              data.img = i.img;
              data.storeData = i.storeData;
            }
          });
        }
      });
    };
    onMounted(() => {
      getShop();
    });

      //click client
      const service = () =>{
        Toast.fail("敬请期待~");
      };

      //跳转购物车
      const toCart = () => {
        router.push('/cart');
      }
      //加入购物车
      const handleAddCart = (type) => {
        let cartlist = [];
        data.storeData.forEach((item)=>{
          item.data.items?.forEach((sub_item)=>{
            sub_item.children.forEach((subsub_item)=>{
              if(subsub_item.num > 0){
                cartlist.push(subsub_item);
              }
            })
          })
        })
        if(cartlist.length === 0){
          Toast("请选择商品");
          return;
        }
        store.commit('ADDCART',cartlist);
        type === 'buy' ? toCart() : "";
      };
      //点击立即购买
      const buyAction = () => {
        handleAddCart("buy");
      }

      return {
          store,
          ...toRefs(data),
          service,
          handleAddCart,
          buyAction,
          toCart,
      };
    }
}
</script>

<style lang='less' scoped>
.store_details {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .food_classify {
      // height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store_img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>