import axios from './request';

//首页数据接口
export const getHomeData=()=>axios.get('/mock/home.json');
//店铺数据接口
export const getShopData=()=>axios.get('/mock/shop.json');