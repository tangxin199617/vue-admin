<template>
	<div class="side">
		<el-row>
			<el-col :span="24">
				<el-menu 
				:default-active="$route.path" 
				router
				class="el-menu-vertical-demo" 
				@open="handleOpen" 
				@close="handleClose"
				background-color="#545c64" 
				text-color="#fff" 
				active-text-color="#ffd04b">
					<template v-for="item in menuList">
						<!-- <el-menu-item :index="item.path">
							<i class="el-icon-menu"></i>
							<span slot="title">{{ item.name }}</span>
						</el-menu-item> -->
						<el-submenu :index="item.path">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>{{ item.title }}</span>
							</template>
							<template v-for="sitem in item.children">
								<el-menu-item :index="sitem.path">{{ sitem.title }}</el-menu-item>
								<el-menu-item index="1-3">高德地图</el-menu-item>
							</template>
						</el-submenu>
					</template>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuList:[]
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			getmenuList(){
				this.$router.options.routes.splice(0,2)
				this.menuList = this.$router.options.routes
			}
		},
		created() {
			this.getmenuList()
			
		}
	};
</script>

<style>
	.side {}

	.el-menu-item,
	.el-submenu__title {
		text-align: left;
	}
</style>
