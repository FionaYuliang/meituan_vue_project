<template>
  <div class="me">
    <Header title="我的"></Header>
    <div class="content">
        <div class="user-info">
            <div class="info">
                <img src="../../assets/header.png"/>
                <div class="user-desc">
                    <span>{{ name }}</span>
                    <span class="name">个性签名：{{ intro }}</span>
                </div>

            </div>
        </div>
        <ul class="user-list">
            <li class="van-hairline-bottom" @click="togo('./order')">
                <span>我的订单</span>
                <van-icon name="arrow"></van-icon>
            </li>
            <li class="van-hairline-bottom" @click="togo('./address')">
                <span>地址管理</span>
                <van-icon name="arrow"></van-icon>
            </li>
            <li class="van-hairline-bottom" @click="togo('./userinfoedit')">
                <span>账号管理</span>
                <van-icon name="arrow"></van-icon>
            </li>
        </ul>

    </div>
    
    <Footer></Footer>
  </div>

 
</template>
<script>
import { reactive, toRefs }  from 'vue';
import Header from '../../components/Header.vue';
import { useStore }  from 'vuex';
import { useRouter} from 'vue-router';
import Footer from '@/components/Footer.vue';

export default { 
components: { Header, Footer },
setup(){
    const store = useStore();
    const router = useRouter();
    
    let userinfo = reactive({
        name:"杨明明",
        intro:"吃饭不积极，思想有问题",

    });
    const togo = (path) =>{
        router.push(path);
    }

    return {
        ...toRefs(userinfo),
        togo,
        store,
    
    }
}
}
</script>
<style lang='less' scoped>
.me {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .user-info {
      width: 94%;
      margin: 10px;
      height: 115px;
      background: linear-gradient(90deg, #ffc400, #c7c351);
      box-shadow: 0 2px 5px #ffc400;
      border-radius: 6px;
      .info {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        box-sizing: border-box;
        img {
          width:60px;
          height:60px;
          border-radius: 50%;
          margin-top: 4px;
        }
        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          line-height: 20px;
          font-size: 14px;
          color: #fff;
          justify-content: space-between;
          span {
            color: #fff;
            font-size: 14px;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
      padding: 0 20px;
      margin-top: 20px;
      background-color: #fff;
      li {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .van-icon-arrow {
          margin-top: 13px;
        }
      }
    }
  }
}
</style>