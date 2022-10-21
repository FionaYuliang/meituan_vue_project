<template>
<div class="food_list" v-if="activeIndex === 0">
    <van-tree-select 
    height="50vw" 
    :items="items"  
    v-model:main-active-index="activeIndex"
    @click-nav="navClick">
        <template #content>
            <div v-for="(i, index) in subItem" class="item_bg">
                <FoodAdd :item="i" :showAdd="true" :addClick="addClick" :onChange="onChange"></FoodAdd>
            </div>   
        </template>
    </van-tree-select>
</div>
<div v-else>{{ foodData.content }}</div>
</template>

<script>
import { reactive, toRefs,ref } from 'vue';
import FoodAdd from './FoodAdd.vue';

export default {
    props: ["activeIndex", "foodData"],
    components: [FoodAdd],
    setup(props) {
        let data = reactive({
            activeIndex: 0,
            items: [],
            subItem:[],
        });
        const activeIndex = ref(0);
        //数据的初始化
        const init = () => {
            let newlist = [];
            props.foodData?.items?.map((i,index) => {
                newlist.push({ text: i.text });
                if(data.activeIndex === index){
                    data.subItem = i.children;
                }
            });
            data.items = newlist;
            //侧边栏展示不出来，感觉是data.items的原因，但是为啥内?
            console.log(newlist);
            console.log(data.items);
        };
        init();
        //点击左侧的导航
        const navClick = (index) => {
            data.activeIndex = index;
            init();
        };
        //切换步进器
        const addClick = (id) =>{
            data.subItem.forEach((item)=>{
                if(item.id == i){
                    item.add = false;
                    item.num += 1;
                }
            })
        }
        //步进器增加触发事件
        const onChange = (value,detail) =>{
            data.subItem.forEach((item)=>{
                if(item.id == detail.name){
                    item.num = value;
                }
            })

        }
        return {
            ...toRefs(data),
            navClick,
            addClick,
            onChange
        };
    },
    components: { FoodAdd }
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