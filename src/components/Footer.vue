<template>
    <div class="footer">
        <div class="item">
        <router-link to="/home" class="nav_item" active-class="nav_color">
            <van-icon name="wap-home-o" size="30"/>首页
        </router-link>
    </div>
    <div class="item">
        <router-link to="/cart" class="nav_item" active-class="nav_color">
            <van-icon name="shopping-cart-o" size="30" :badge="store.state.cartList.length"/>购物车</router-link>
    </div>
    <div class="item">
        <router-link to="/order" class="nav_item" active-class="nav_color">
            <van-icon name="records" size="30"/>订单</router-link>
    </div>
    <div class="item"> 
        <router-link to="/center" class="nav_item" active-class="nav_color">
            <van-icon name="user-circle-o" size="30"/>我的</router-link>
    </div>
    </div>

    </template>
    <script>
    import { useStore } from 'vuex';
    export default {
      setup(){
        const store = useStore();
    
        return {
          store,
        }
      }
     

    }
    </script>
  <style lang='less' scoped>
  .footer {
    display: flex;
    font-size: 12px;
    background-color: #fff;
    border-top: 0.5px solid #eee;
    .item {
      flex: 1;
      display: flex;
      justify-content: center;
      .nav_color {
        color: #ffc400;
      }
      .nav_item {
        display: flex;
        flex-flow: column;
        align-items: center;
      }
    }
  }
  </style>