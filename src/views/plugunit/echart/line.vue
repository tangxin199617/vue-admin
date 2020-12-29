<template>
	<div id="myline"></div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			ButtomDrawLine() {
				let t = this;
				let myChart = this.$echarts.init(document.getElementById('myline'))
				myChart.setOption({
					title: {},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						left: 'right',
						textStyle: { //图例文字的样式
							color: '#ffffff',
							fontSize: 14
						},
						show: true,
						data: [{
								name: '审方数',
							},
							{
								name: '处方数',
							},
							{
								name: '会员数'
							},
						]
					},
					/*toolbox: {
					  feature: {
					    dataView: {readOnly: false},
					    restore: {},
					    saveAsImage: {}
					  },
					  iconStyle:{
					    normal:{
					      color:'white',//设置颜色
					    }
					  }
					},*/
					xAxis: [{
						type: 'category',
						axisLine: { // x轴的颜色和宽度
							lineStyle: {
								color: '#3594FF',
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							},
						},
						data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
					}],
					yAxis: [{
						type: 'value',

						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							},
						},
						axisLine: {
							lineStyle: {
								color: '#3594FF',
							}
						},
						// 控制网格线是否显示
						splitLine: {
							show: false
						},
						min: 0,
						splitNumber: 5,
						boundaryGap: [0.2, 0.2],
						data: [0, 50, 100, 150],
					}],
					grid: {
						top: '25%',
						left: '0',
						right: '0',
						bottom: '0',
						containLabel: true
					},
					series: [{
							name: '审方数',
							type: 'line',
							smooth: true,
							symbolSize: 1, // 拐点图形大小
							areaStyle: {
								normal: {
									color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(63,227,236,0.8)'
									}, {
										offset: .4,
										color: 'rgba(63,227,236,0.3)'
									}, {
										offset: 1,
										color: 'rgba(63,227,236,0.00)'
									}])
									// ['rgba(63,227,236,0.3)'],
								}
							},
							itemStyle: {
								color: ['#3FE3EC'],
							},
							data: [10, 20, 15, 20, 15, 20, 15, 20, 15, 20, 15, 20],
						},
						{
							name: '处方数',
							type: 'line',
							smooth: true,
							symbolSize: 1, // 拐点图形大小
							areaStyle: {
								color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(82,206,86,0.8)'
								}, {
									offset: .4,
									color: 'rgba(82,206,86,0.3)'
								}, {
									offset: 1,
									color: 'rgba(82,206,86,0.00)'
								}])
								// ['rgba(82,206,86,0.3)'],
							},
							itemStyle: {
								normal: {
									color: ['#52CE56'],
								}
							},
							data: [10, 5, 15, 5, 15, 20, 15, 20, 15, 5, 15, 10]
						},
						{
							name: '会员数',
							type: 'line',
							smooth: true,
							symbolSize: 1, // 拐点图形大小
							areaStyle: {
								color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(251,98,100,0.8)'
								}, {
									offset: .4,
									color: 'rgba(251,98,100,0.3)'
								}, {
									offset: 1,
									color: 'rgba(251,98,100,0.00)'
								}])
								// ['rgba(251,98,100,0.3)'],
							},
							itemStyle: {
								normal: {
									color: ['#FB6264'],
								}
							},
							data: [35, 45, 65, 25, 65, 44, 15, 40, 35, 46, 50, 25]
						}
					]
				})
			},
		},
		mounted() {
			this.ButtomDrawLine()
		}
	}
</script>

<style scoped>
	#myline {
		width: 600px;
		height: 300px;
		border-bottom: 1px solid #eee;
		background: url(../../../assets/timg.jpg);
		background-size: cover;
	}
</style>
