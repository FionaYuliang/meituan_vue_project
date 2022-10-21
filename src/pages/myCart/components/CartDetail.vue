<template>
    <div class="cart_details">
        <div class="content">
            <van-checkbox-group v-model="checked" ref="checkboxGroup">
                <!-- <van-checkbox name="a">复选框 a</van-checkbox>
                <van-checkbox name="b">复选框 b</van-checkbox>
                <van-checkbox name="c">复选框 c</van-checkbox> -->
                <div v-for="(i, index) in store.state.cartList">
                    <FoodAdd :item="i"></FoodAdd>
                </div>
            </van-checkbox-group>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

import FoodAdd from '@/pages/myShop/components/FoodAdd.vue';
export default {
    setup() {
        const store = useStore();
        const checked = ref([]);
        const checkboxGroup = ref(null);
        const checkAll = () => {
            checkboxGroup.value.toggleAll(true);
        };
        const toggleAll = () => {
            checkboxGroup.value.toggleAll();
        };
        return {
            checkAll,
            toggleAll,
            store,
        };
    },
    components: { FoodAdd }
}
</script>