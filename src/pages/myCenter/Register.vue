<template>
    <div class="login">
        <Header title="注册"></Header>
        <div class="img">美团</div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit"  color="#ffc400">
                注册
                </van-button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="primary" @click="toLogin"  color="#ffc400">
                已有账号，去登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { onMounted, reactive, toRefs }  from 'vue';
import Header from '../../components/Header.vue';
import { useStore }  from 'vuex';
import { useRouter} from 'vue-router';
import Footer from '@/components/Footer.vue';
import { Toast } from 'vant';

export default { 
components: { Header, Footer },
setup(){
    const store = useStore();
    const router = useRouter();
    
    let data = reactive({
        username:"",
        password:"",
    });

    //common method
    const register = (value) => {
        localStorage.setItem("userInfo",JSON.stringify(value));
        Toast("注册成功，请登录");
        router.push('./login');
    }

    //注册行为
    const onSubmit = (value) => {
        //判断是否有相同用户名存在
        if(localStorage.userInfo){
            let userInfo = JSON.parse(localStorage.userInfo);
            if(userInfo["用户名"] == value["用户名"]){
                Toast("用户名已被占用");
                return;
            }else{
                register(value);
            }
        }else{
            register(value);
        }
        
    };

    const toLogin = () => {
        router.push('./login');
    }

    return {
        ...toRefs(data),
        store,
        onSubmit,
        toLogin,
    }
}
}   
</script>
<style lang='less' scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>
