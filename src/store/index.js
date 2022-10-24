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
                name: '杨明明',
                tel: '15340126264',
                province: '北京市',
                city: '北京市',
                county: '海淀区',
                addressDetail: '安宁庄西路1号',
                isDefault: true,
                areaCode: '110101',
            },
            {
                id:1002,
                name: '学舟寺',
                tel: '18354236262',
                province: '山东省',
                city: '济南市',
                county: '槐荫区',
                addressDetail: '某某街道某某小区',
                isDefault: false,
                areaCode: '130102',
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
        },
        //新增地址
        ADDNEWADDR(state,value){
            if(value.isDefault){
                state.userAddress.map((item)=>{
                    item.isDefault = false;
                });
            }
            state.userAddress.push(value);
        },
        //编辑地址
        CHANGEADDR(state,value){
           state.userAddress = state.userAddress.map((item)=> {
            if(value.isDefault){
                item.isDefault = false;
            }
            return item.id === value.id ? value : item;
           })
        },
        //删除地址
        DELETEADDR(state,value){
            state.userAddress = state.userAddress.map((item)=>{
                return !(value.id === item.id);

            });
            if(value.isDefault && state.userAddress.length){
                state.userAddress[0].isDefault = true;
            }
            
        },

    },
    //异步执行的方法
    actions:{

    },
});