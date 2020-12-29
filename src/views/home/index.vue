<template>
    <Editor v-model="content" @editorInput="editorInput"/>
  </template>
  <script>
  import Editor from '@/components/quillEditor/quillEditor.vue'
  export default {
    components: {
      Editor
    },
    data() {
      return {
        content: '',
      }
    },
	methods:{
		editorInput(val){
			// this.content = val
		}
	}
  }
  </script>
  <style scoped>
 
  </style>