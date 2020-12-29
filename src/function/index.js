/**
 * 节流函数
 * 当持续触发事件时，保证在一定时间内只调用一次事件处理函数，意思就是说，假设一个用户一直触发这个函数，且每次触发
 * 小于既定值，函数节流会每隔这个时间调用一次
 * 用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
 * 实现函数节流我们主要有两种方法：时间戳和定时器
 *
 * @param func 执行函数
 * @param wait 间隔时间
 */
// export function throttle(func, wait) {
// 	var timer
// 	var begin = new Date().getTime()  // 上次函数执行时所在的时间戳
// 	return function() {
// 		var current = new Date().getTime();  // 本次函数执行时所在的时间戳
// 		if (current - begin >= 2000) {
// 			func();
// 			begin = current;
// 		}else{
// 			timer = setTimeout(function() {
// 			    func();
// 			}, wait);
// 		}
// 	}	
// }

export function debounce(fn, wait) {
	let timeout = null
	if(timeout !== null) clearTimeout(timeout)
	timeout = setTimeout(fn, wait)
}

export function throttle(fn, delay) { 
 var prev = Date.now()     
 return function() {        
  var now = Date.now()        
  if (now - prev > delay) {          
   fn()        
   prev = Date.now()       
  }     
 }    
}    



