<template>
	<div class="chart">
		<h1>echart图表</h1>
		<div class="Graphics">
			<bar></bar>
			<poly-line></poly-line>
			<v-pie></v-pie>
		</div>
		
	</div>
</template>

<script>
	import bar from './bar.vue'
	import polyline from './line.vue'
	import pie from './pie.vue'
	export default {
		components:{
			bar,
			"poly-line":polyline,
			"v-pie":pie
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		},
	}
</script>

<style scoped> 
.chart{
	padding: 20px;
}
.chart h1{
	text-align: center;
	margin-bottom: 20px;
	font-size: 20px;
}
.Graphics{
	display: flex;
	flex-wrap: wrap;
}
</style>
