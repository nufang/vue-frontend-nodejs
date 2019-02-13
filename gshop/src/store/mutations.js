/*
直接更新state的多个方法的对象
 */
import Vue from 'vue';
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutations-types'

export default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address;
  },
  [RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops = shops;
  },
  [RECEIVE_USER_INFO] (state,{userInfo}){
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO] (state){
    state.userInfo = {};
  },

  [RECEIVE_GOODS] (state,{goods}){
    state.goods = goods;
  },
  [RECEIVE_INFO] (state,{info}){
    state.info = info;
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings;
  },
  [INCREMENT_FOOD_COUNT] (state,{food}){
    if(!food.count){  //第一次增加
      //food.count = 1;  //新增属性（没有数据绑定）
      Vue.set(food, 'count', 1); //让新增的属性也有数据绑定
      //将food添加到cartFoods中
      state.cartFoods.push(food);
    }else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT] (state,{food}){
    if(food.count){  //第一次增加
      food.count--;
      if(food.count === 0){
        //将count从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1);
      }
    }
  },

  [CLEAR_CART] (state){
    //清除food中的count
    state.cartFoods.forEach(food => food.count = 0);

    //移除购物车中购物项
    state.cartFoods = [];
  },

  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops;
  }
}
