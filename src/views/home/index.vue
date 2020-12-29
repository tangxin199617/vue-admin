<template>
  <Editor v-model="content" @editorInput="editorInput" />
</template>
<script>
import Editor from "@/components/quillEditor/quillEditor.vue";
export default {
  components: {
    Editor
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    //  获取重富文本内容的数据（父子组件传值）
    editorInput(val) {
      this.content = val;
      console.log(this.content);
    }
  }
};
</script>
<style scoped></style>
