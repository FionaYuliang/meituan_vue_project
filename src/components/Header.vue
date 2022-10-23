<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toback">
        </van-icon>
        <div>{{ title }}</div>
        <div class="edit" v-if="isEdit" @click="editClick">编辑</div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import emitter from '../common/js/eventbus.js';
export default {
    props: ["title","isEdit"],
    setup(){
      const router = useRouter();
      const toback = () =>{
        router.back();
      };
      //编辑按钮，出发全局事件总线
      const editClick = () =>{

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
  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>