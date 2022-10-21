<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toback">
        </van-icon>
        <div>{{ title }}</div>

    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
    props: ["title"],
    setup(){
      const router = useRouter();
      const toback = () =>{
        router.back();
      };
      return {
        toback,
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