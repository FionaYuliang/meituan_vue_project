<template>
<div class="food_list" v-if="activeIndex === 0">
    <van-tree-select 
    height="88vw" 
    :items="items"  
    v-model:main-active-index="activeIndex"
    @click-nav="navClick">
        <template #content>products</template>
    </van-tree-select>
</div>
<div v-else>{{ foodData.content }}</div>
</template>

<script>
import { reactive, toRefs,ref } from 'vue';

export default {
    props:["activeIndex","foodData"],
    setup(props){
        let data = reactive({
            activeIndex: 0,
            items: [ ],
        });
        const activeIndex = ref(0);
        //数据的初始化
        const init = () => {
            let newlist = [];
            props.foodData?.items?.map((i)=>{
                newlist.push({text: i.text});
            });
            data.items = newlist;
            console.log(newlist);
            console.log(data.items);
        } 
        init();
        //点击左侧的导航
        const navClick = (index) =>{
            data.activeIndex = index;
            init();
        };
    return {
        ...toRefs(data),
        navClick,
      
    };
        
    },
    
};
</script>
<style lang="less" scoped>
.food_list {
  margin-top: 20px;
  .item_bg {
    padding: 10px;
  }
}

/deep/ .van-tree-select__item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>