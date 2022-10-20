<template>
    <div></div>
</template>


<script>
import { reactive,toRefs } from 'vue';

export default {
    components :{

    },
    setup(){
        let data = reactive({

        });
        return {
            ...toRefs(data);
        }
    }
}
</script>

<style lang="less" scoped>
</style>