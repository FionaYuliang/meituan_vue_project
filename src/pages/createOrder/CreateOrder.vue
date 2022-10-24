<template>
    <div class="create_order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="selectedUser.tel" :name="selectedUser.name" @click="onEdit" />
        <div class="content">
            <div v-for="(i,index) in store.state.orderList" :key="index">
                <van-card
                    :num="i.num"
                    :price="i.price"
                    :title="i.title"
                    :thumb="i.pic"
                    />
            </div>
        </div>
        <div class="pay_wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥{{ orderPrice }}</span>
            </div>
            <van-button type="primary" class="pay-btn" @click="handleCreateOrder" color="#ffc400" block>生成订单</van-button>

        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    components: { Header },
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        let data = reactive({
            selectedUser:{
                name:'',
                tel:'',
            },
            orderPrice: 0,
        });

        //用户信息初始化
        const initUser = () => {
            store.state.userAddress.forEach((item)=>{
                if(item.isDefault){
                    data.selectedUser.name = item.name;
                    data.selectedUser.tel = item.tel;
                }
            });
        };
        //编辑收件地址
        const onEdit = () =>{
            router.push("./address");

        };
        //计算商品总金额
        const allPrice = () =>{
            let price = 0;
            if(store.state.orderList.length){
                store.state.orderList.forEach((item)=>{
                    price += item.num * item.price;
                })
                data.orderPrice = price;
            }

        };
        onMounted(()=>{
            initUser();
            allPrice();
        })
        //生成订单按钮
        const handleCreateOrder = async () => {
            await Dialog.alert({
                title: '提示',
                message: '恭喜！您的订单已完成',
            })

            //从购物车数据中删除已下单的
            let cartRemainder = store.state.cartList.filter((item) => {
                return !route.query.list.includes(item.id + "");
            });
            
            store.commit('DELETE',cartRemainder);
            store.commit('UPDATEORDER');//更新已下单列表
            router.push('/order');
        };

        return {
            ...toRefs(data),
            store,
            initUser,
            onEdit,
            allPrice,
            handleCreateOrder,
        }
    }

}
</script>
<style lang='less' scoped>
.create_order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>