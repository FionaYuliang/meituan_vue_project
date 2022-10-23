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
         <van-submit-bar :price="totalPrice * 100" @submit="onSubmit"  
         button-text="结算" class="submit-all" button-color="#ffc400">
          <van-checkbox v-model="checked" checked-color="#ffc400" @change="toggleAll">全选</van-checkbox>
          </van-submit-bar>
    </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import FoodAdd from '@/components/FoodAdd.vue';
import { computed } from '@vue/reactivity';
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
export default {
    components:{ FoodAdd },
    setup() {
        const store = useStore();
        let data = reactive({
            result:[],
            checked: true,
        })
      
        const checkboxGroup = ref(null);
      

      //初始化所有商品的选中
        const init = () =>{
          data.result = store.state.cartList.map((item)=> item.id);
        }
        onMounted(()=>{
          init();
        })
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
        }

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


        //计算总价
        const totalPrice = computed(()=>{
          let countlist = store.state.cartList.filter((item)=>
            data.result.includes(item.id)
          );
          let sum = 0;
          countlist.forEach((item) => {
            sum += item.num * item.price;
          });
          return sum;
        });
            // 总价




        //结算按钮
        const onSubmit = () => {

        };
        return {
            store,
            ...toRefs(data),
            onMounted,
            checkboxGroupChange,
            onChange,
            onSubmit,
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
    bottom: 58px;
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