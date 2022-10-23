<template>
    <div class="cart_details">
        <!-- 商品的列表 -->
        <div class="content">
            <van-checkbox-group v-model="result" ref="checkboxGroup" @change="checkboxGroupChange">
                <div v-for="(i, index) in store.state.cartList">
                    <FoodAdd :item="i" :onChange="onChange" :showCheckBox="true"></FoodAdd>
                </div>
            </van-checkbox-group>
        </div>
         <!-- 结算 -->
         <van-submit-bar :price="totalPrice * 100" @submit="onSubmit"  v-if="isdelete === false"
         button-text="结算" class="submit-all" button-color="#ffc400">
          <van-checkbox v-model="checked" checked-color="#ffc400" @change="toggleAll">全选</van-checkbox>
          </van-submit-bar>

          <!-- 删除 -->
          <div class="buy" v-else>
            <div class="left">
              <van-checkbox v-model="checked" checked-color="#ffc400" @click="toggleAll">全选</van-checkbox>
            </div>
            <div class="delete" @click="deleteClick">删除</div>
          </div>
    </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import FoodAdd from '@/components/FoodAdd.vue';
import { computed } from '@vue/reactivity';
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import { Toast } from 'vant';
import emitter from '../../../common/js/eventbus.js';
export default {
    components:{ FoodAdd },
    props:["init"],
    setup(props) {
        const store = useStore();
        const router = useRouter();
        let data = reactive({
            result:[],
            checked: true,
            isdelete: false,
        });
      
        // const checkboxGroup = ref(null);
    
      //初始化所有商品的选中
        const init = () =>{
          data.result = store.state.cartList.map((item)=> item.id);
        };
        onMounted(()=>{
          init();
        });
        //商品个数要在各处保持同步
        const onChange = (value, detail) =>{
          store.state.cartList.map((item)=>{
            if(item.id === detail.name){
              item.num = value;
            }
          });
        };

        //每个复选框的点击事件出发，要和全选/非全选保持同步
        const  checkboxGroupChange = (checkedArr) => {
          if(checkedArr.length == store.state.cartList.length){
            data.checked = true;
          }else{
            data.checked = false;
          }
          data.result = checkedArr;
        };

        //全选checkAll或者取消全选
        const toggleAll = () => {
          if(data.result.length == store.state.cartList.length){
            data.result = [];
          }else{
            init();
          }
        };
      
        // const toggleAll = () => {
        //     checkboxGroup.value.toggleAll();
        // };
        // const checkAll = () => {
        //     checkboxGroup.value.toggleAll(true);
        // };

          //更新数据通用方法
          const updateCartData = (type) => {
          return store.state.cartList.filter((item)=>{
            return type === 2 
              ? data.result.includes(item.id)
              : !data.result.includes(item.id)
          })
        };

        //计算总价
        const totalPrice = computed(()=>{
          let countlist = updateCartData(2);
          let sum = 0;
          countlist.forEach((item) => {
            sum += item.num * item.price;
          });
          return sum;
        });

      

        //结算按钮
        const onSubmit = () => {
          if(data.result.length !== 0){
            store.commit("PAY",updateCartData(2));
            Toast("下单成功！");
            router.push('/order');   
          }else{
            Toast.fail("请选择要结算的商品");
          };        
        };

        //监听编辑时的点击
        emitter.on("edit",() => {
          data.isdelete = !data.isdelete;
        });

        //删除购物车内的商品
        const deleteClick = () => {
          if(data.result.length){
            //更新删除后的购物车数据
            store.commit('DELETE',updateCartData(1));
            //清空原来选择的
            data.result = [];
            //刷新，此处用的是父组件传过来的初始化函数
            props.init();
          }else{
            Toast.fail("没有选中商品");
          }
        };

 
        return {
            store,
            ...toRefs(data),
            onMounted,
            checkboxGroupChange,
            onChange,
            onSubmit,
            deleteClick,
            toggleAll,
            totalPrice,
        };
    },
}
</script>
<style lang='less' scoped>
.cart_details {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 58px;
  }

  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>