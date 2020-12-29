<template>
	<div>
		<input type="text" class="input"  v-model="searchText" @keyup="deboun" /></input>
		<p>防抖响应数据:{{ title }}</p>
		
		<el-button @click="throttleClick">节流</el-button>
		应用市场所有页面完成，bug修改，样式排版
	</div>
</template>
<script>
	import  { debounce, throttle }  from '@/function/index.js'
	export default {
		data() {
			return {
				searchText:'',
				title:"",
			}
		},
		watch:{
			searchText(newValue){	
				
			},
		},
		methods: {
			deboun(e){
				debounce(() =>{
					this.title = this.searchText
				}, 1000)
				
			},
			throttleClick(){
				throttle(this.abc, 1000)()
			},
			abc(){
				console.log(1111)
			}	
				
		}
	}
</script>
<style scoped>

</style>
