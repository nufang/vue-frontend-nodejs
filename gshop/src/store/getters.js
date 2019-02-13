/*
包含多个基于state的getter计算属性的对象
 */
export default {
  //统计商品数量
  totalCount(state){
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
  },
  //统计商品价格
  totalPrice(state){
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price, 0);
  },

  positiveSize(state){
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0 ),0)
  }
}
