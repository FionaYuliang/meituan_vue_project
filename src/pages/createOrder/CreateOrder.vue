<template>
    <div class="create_order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div>
                <van-card
                    num="2"
                    price="2.00"
                    title="商品标题"
                    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
                    />
            </div>
        </div>
        <div class="pay_wrap">
            <div class="allPrice">
                <span>商品金额</span>
                <span>allPrice</span>
            </div>
            <van-button type="primary" class="pay_btn" color="#ffc400" block>生成订单</van-button>

        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
export default {
    components: { Header },
    setup(){
        const store = useStore();
        const router = useRouter();
        let data = reactive({
            tel:'15340126264',
            name:'yangmm',
        });

        return {
            ...toRefs(data),
            store,
        }
    }

}
</script>