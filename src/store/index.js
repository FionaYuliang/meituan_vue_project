import { createStore } from "vuex";

export default createStore({
    state:{
        cartList:[],//购物车数据
        orderList:[],//生成订单列表数据
        cartEdit: true,//购物车的编辑功能
    },
    //同步执行的方法
    mutations:{
        //加入购物车
        ADDCART(state, value){
            state.cartList = value;
        },
        //结算商品
        PAY(state, value){
            state.orderList = value;
        },
        //从购物车中删除数据
        DELETE(state, value){
            state.cartList = value;
        },
        CARTEDIT(state){
            state.cartEdit = !state.cartEdit;
        }

    },
    //异步执行的方法
    actions:{

    },
});