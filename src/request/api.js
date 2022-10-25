import axios from './request';

//店铺数据接口
export const getShopData =() => axios.get('/mock/shop.json');