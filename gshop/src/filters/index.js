import Vue from 'vue'
//import moment from 'moment'  包比较大，压缩过后为64.88kb

// Vue.filter('data-format',function(value,formatStr = 'YYYY-MM-DD HH:mm:ss'){
//   return moment(value).format(formatStr)
// })
import format from 'date-fns/format'

Vue.filter('data-format',function(value,formatStr = 'YYYY-MM-DD HH:mm:ss'){
  return format(value, formatStr)
})
