<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toback">
        </van-icon>
        <div>{{ title }}</div>
        <div class="edit" v-if="isedit" @click="editClick">编辑</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import emitter from '../common/js/eventbus.js';
export default {
    props: ["title","isedit"],
    setup(){
      const router = useRouter();
      const store  = useStore();
      const toback = () =>{
        router.back();
      };
      //编辑按钮，触发全局事件总线
      const editClick = () =>{
        if(store.state.cartList.length) {
          emitter.emit("edit");
        }else{
          Toast.fail("空空如也，快去选购吧！");
        }
      };
      return {
        toback,
        editClick,
      };
    }
}
</script>
<style lang="less" scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }
  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>