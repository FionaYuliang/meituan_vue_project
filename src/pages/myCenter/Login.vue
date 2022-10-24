<template>

   登录页面
</template>
<script>
import { onMounted, reactive, toRefs }  from 'vue';
import Header from '../../components/Header.vue';
import { useStore }  from 'vuex';
import { useRouter} from 'vue-router';
import Footer from '@/components/Footer.vue';

export default { 
components: { Header, Footer },
setup(){
    const store = useStore();
    const router = useRouter();
    
    let data = reactive({
    

    });


    return {
        ...toRefs(data),
        store,
    
    }
}
}   
</script>
<style lang='less' scoped>
</style>
