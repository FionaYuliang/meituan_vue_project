import { createStore } from "vuex";

export default createStore({
    state:{
        cartList:[],//购物车数据
        orderList:[],//生成订单列表数据
    },
    //同步执行的方法
    mutations:{
        //加入购物车
        ADDCART(state, value){
            state.cartList = value;
        },
        PAY(state, value){
            state.orderList = value;
        }

    },
    //异步执行的方法
    actions:{

    },
});