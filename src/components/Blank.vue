<template>
    <div class="blank_content">
      <!-- <img src="../assets/pic_blank.png"/> -->
    空空如也
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.blank_content {
  flex: 1;
  margin: 20px;
  font-size: 16px;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 72vh;
  .icon {
    margin-bottom: 10px;
  }
}
</style>