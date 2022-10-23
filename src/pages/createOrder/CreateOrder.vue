<template>
    <div class="create_order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="selectedUser.tel" :name="selectedUser.name" @click="onEdit" />
        <div class="content">
            <div v-for="(i,index) in store.state.orderList" :key="index">
                <van-card
                    :num=i.num
                    :price="i.price"
                    :title="i.name"
                    :thumb="i.pic"
                    />
            </div>
        </div>
        <div class="pay_wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥{{ orderPrice}}</span>
            </div>
            <van-button type="primary" class="pay-btn" @click="handleCreateOrder" color="#ffc400" block>生成订单</van-button>

        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
export default {
    components: { Header },
    setup(){
        const store = useStore();
        const router = useRouter();
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
                if(item.isDafault == true){
                    data.selectedUser.name = item.name;
                    data.selectedUser.tel = item.tel;
                }
            })
        };
        //编辑联系人
        const onEdit = () =>{

        };
        //计算商品总金额
        const allPrice = () =>{
            let price = 0;
            if(store.state.orderList.length){
                store.state.orderList.forEach((item)=>{
                    price += item.num * item.price;
                })
                data.allPrice = price;
            }

        };
        onMounted(()=>{
            allPrice();
        })
        //生成订单按钮
        const handleCreateOrder = () => {

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