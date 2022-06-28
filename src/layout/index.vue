<template>
  <div class="container">
    <sidebar name="aside" class="side"></sidebar>
    <el-row :span="24" class="content">
      <el-col>
        <navbar name="top"></navbar>
        <transition name="fade-transform" mode="out-in">
          <app-main v-if="show"></app-main>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import sidebar from "./components/sidebar";
import appMain from "./components/main";
export default {
  components: {
    navbar,
    sidebar,
    appMain
  },
  data() {
    return {
      show: true,
      ossPath: ""
    };
  },
  created() {
    // 获取上传图片的路径
    // Vue.prototype.ossPath = `crm/${this.$store.state.user_token.company_name}/upload`
  }
};
</script>

<style scoped>
.container {
  min-width: 1024px;
  display: flex;
}
.content {
  flex: 1;
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.side {
  width: 210px;
  height: 100vh;
  background-color: rgb(84, 92, 100);
}
</style>
