import { createStore } from "vuex";

export default createStore({
    state:{
        cartList:[],//购物车数据
        orderList:[],//生成订单列表数据
        orderedList: [],//已下单列表
        cartEdit: true,//购物车的编辑功能
        userAddress: [
            {
                id:1001,
                name:'yangmingming',
                tel:'15340126264',
                province:'',
                city:'',
                county:'',
                addressDetail:'',
                isDefault:true,
                areaCode:'',
            },
            {
                id:1002,
                name:'yaozeyuan',
                tel:'18354236262',
                province:'',
                city:'',
                county:'',
                addressDetail:'',
                isDefault:true,
                areaCode:'',
            },
        ]
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
        //购物车右上角编辑按钮
        CARTEDIT(state){
            state.cartEdit = !state.cartEdit; 
        },
        //更新已下单列表
        UPDATEORDER(state, value){
            state.orderedList = state.orderedList.concat(state.orderList);
        }

    },
    //异步执行的方法
    actions:{

    },
});