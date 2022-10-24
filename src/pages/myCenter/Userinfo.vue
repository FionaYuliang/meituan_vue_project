<template>
    <div class="user-edit">
        <header title="账号管理"></header>
        <div class="input-item">
            <van-field v-model="username" label="昵称" placeholder="请输入用户名"/>
            <van-field v-model="intro" label="个性签名" placeholder="请输入个性签名"/>
            <van-field v-model="password" type="password" label="修改密码" placeholder="请输入密码"/>
        </div>
        <van-button type="primary" round color="#ffc400" block class="save-btn" @click="save">保存</van-button>
            <van-button type="primary" round color="#ffc400" block class="save-btn" @click="logout">退出登录</van-button>
    </div>
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
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>