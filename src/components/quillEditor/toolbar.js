// 工具栏配置
const toolbarOptions = [
  // 加粗 斜体 下划线 删除线
  ["bold", "italic", "underline", "strike"],
  // 引用  代码块
  ["blockquote", "code-block"],
  // 1、2 级标题
  [{ header: 1 }, { header: 2 }],
  // 有序、无序列表
  [{ list: "ordered" }, { list: "bullet" }],
  // 上标/下标
  [{ script: "sub" }, { script: "super" }],
  // 缩进
  [{ indent: "-1" }, { indent: "+1" }],
  // 文本方向
  [{ direction: "rtl" }],
  // 字体大小
  [{ size: ["small", false, "large", "huge"] }],
  // 标题
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  // 字体颜色、字体背景颜色
  [{ color: [] }, { background: [] }],
  // 字体种类
  [{ font: [] }],
  // 对齐方式
  [{ align: [] }],
  // 清除文本格式
  ["clean"],
  // 链接、图片、视频
  ["link", "image", "video"]
];

const handlers = {
  image: function(value) {
    if (value) {
      // 触发input框选择图片文件
      document.querySelector(".avatar-uploader input").click();
    } else {
      this.quill.format("image", false);
    }
  },
  video: function(value) {
    console.log(value);
    if (value) {
      alert("要用上传视频时，请关闭上传前对图片做的限制，不然不能上传视频");
      // document.querySelector(".avatar-uploader input").click();
    } else {
      this.quill.format("video", false);
    }
  }
};

export default {
  placeholder: "您想说点什么",
  // 主题
  theme: "snow",
  modules: {
    toolbar: {
      // 工具栏选项
      container: toolbarOptions,
      // 事件重写
      handlers: handlers
    }
  }
};
