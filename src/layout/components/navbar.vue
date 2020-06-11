<template>
    <!--头部导航栏-->
    <div class="topNav">
        <el-row class="container">
            <el-col :span="24" class="topbar-wrap">
                <div class="topbar-logo">
                    <img src="@/assets/logo.png" />
                </div>
                <div class="topbar-account topbar-btn">
                    <el-dropdown trigger="click">
                        <div class="el-dropdown-link userinfo-inner">
                            <div class="avatar-inner">
                                <img src="@/assets/logo.png" />
                            </div>
                            <i class="iconfont icon-user"></i>
                            {{ nickname }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <!-- 中英文切换 -->
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link" >
                            {{ is_switchover == 'zh' ? '中文':'English' }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh">中文</el-dropdown-item>
                            <el-dropdown-item command="en">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_switchover:this.$store.state.user.language,
            nickname: this.$store.state.user.age,
            userToken: JSON.parse(sessionStorage.getItem('user_token')),
        }
    },
    // watch: {
    //     $route: function(to, from) {
    //         this.routeMenu()
    //     }
    // },
    methods: {
        // 中英文切换
        handleCommand(command){
            let lang = command === '' && undefined ? 'zh':command
            console.log(lang)
            this.$i18n.locale = lang
            if (lang == 'zh') {
                this.is_switchover = lang
                this.$store.commit("changeLanguage", {language:lang}) 
            }else if(lang == 'en'){
                this.is_switchover = lang
                this.$store.commit("changeLanguage", {language:lang}) 
            }
        },
        logout() {
            this.$router.push("./login")
            sessionStorage.removeItem("user_token")
            this.$store.state.user_token = ""
        },
    },
    created(){
    }
}
</script>

<style scoped>
.topNav{
    width: 100%;
}
.container .topbar-wrap {
    height: 50px;
    line-height: 50px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.topbar-logo {
    height: 100%;
}
.topbar-logo img {
    width: auto;
    height: 100%;
}
.topbar-account >>> .el-dropdown{
    padding: 0 15px;
    cursor: pointer;
}

.container .topbar-wrap .userinfo-inner {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    padding-left: 10px;
}

.container .topbar-wrap .userinfo-inner .avatar-inner {
    /* display: inline-flex; */
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
    overflow: hidden;
}

.container .topbar-wrap .userinfo-inner img {
    width: 100%;
    height: auto;
}
</style>