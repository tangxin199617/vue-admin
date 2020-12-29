<template>
  <div>
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="file"
      :headers="header"
      :data="data"
      :show-file-list="false"
      list-type="picture"
      :multiple="false"
      :on-success="uploadSuccess"
      :on-progress="onProgress"
      :on-error="uploadError"
      :before-upload="beforeUpload"
    >
    </el-upload>

    <quill-editor
      v-loading="loading"
      class="editor"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @change="onEditorChange($event)"
    >
    </quill-editor>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import quillConfig from "./toolbar.js";
export default {
  props: {
    /*编辑器的内容*/
    value: {
      type: String
    },
    /*图片大小*/
    maxSize: {
      type: Number,
      default: 4000 //kb
    }
  },

  components: {
    quillEditor
  },

  data() {
    return {
      content: "",
      loading: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      editorOption: quillConfig,
      serverUrl: "https://jsonplaceholder.typicode.com/posts/", // 这里写你要上传的图片服务器地址
      header: {
        // token: sessionStorage.token
        // 有的图片服务器要求请求头需要有token
      },

      data: {}
    };
  },

  methods: {
    onEditorChange(val) {
      //内容改变事件
      console.log(val);
      console.log(this.content);
      this.$emit("editorInput", this.content);
    },

    // 富文本图片上传前
    beforeUpload(file) {
      console.log(file);
      this.data.img = file; // 上传时data中传给后台的参数
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传图片只能是 jpg/png 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isJPG && isLt2M;
    },
    // 富文本图片上传时
    onProgress(event, file, fileList) {
      this.loading = true;
    },
    // 富文本图片上传
    uploadSuccess(res, file) {
      console.log(res);
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      // 如果上传成功
      if (res.code == 200) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.url为服务器返回的图片地址
        quill.insertEmbed(length, "image", res.result.url);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("插入失败");
      }
      // loading动画消失
      this.loading = false;
    },
    // 富文本图片上传失败
    uploadError() {
      // loading动画消失
      this.loading = false;
      this.$message.error("上传失败");
    }
  }
};
</script>

<style scoped>
@import "./font.css";
</style>
