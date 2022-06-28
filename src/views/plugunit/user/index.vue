<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>姓名：{{ student.name }}</h2>
    <h2 v-big="student.age">年龄：{{ student.age }}</h2>
    <h2 v-if="student.sex">性别：{{ student.sex }}</h2>
    <h2>国家：{{ student.message }}</h2>
    <el-button @click="submit">添加数据</el-button>
    <div v-for="item in objArr" :key="item.name">
      <h5>{{ item.name }}-{{ item.age }}</h5>
    </div>
    <el-button @click="addClick">添加数组</el-button>
    <ul v-for="(s, index) in hodArr" :key="index">
      <li>{{ s }}</li>
    </ul>
    <el-button @click="updateClick">修改数组</el-button>
    <p>自定义指令</p>
    <input type="text" v-find :value="find" />
    <el-button @click="findClick">修改自定义指令值</el-button>、
    <!-- // 限制i耨他只能输入3位小数 -->
    <input
      placeholder="兼容性测试"
      type="number"
      v-model="perShrOwn"
      class="form-input"
      @input="changePerShrOwn"
      min="0.000"
    />
    <input
      id="test"
      type="number"
      min="0.000"
      v-model="perShrOwn1"
      @input="clearNoNum(perShrOwn1)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "小学",
      address: "上海",
      student: {
        name: "tom",
        age: 18
      },
      objArr: [{ name: "jack", age: 20 }],
      hodArr: ["抽烟", "喝酒", "打豆豆"],
      find: 1,
      perShrOwn: 0,
      perShrOwn1: 0
    };
  },
  //   自定义指令
  directives: {
    big(a, b) {
      a.innerHTML = b.value + 10;
    },
    find: {
      bind(element, binding) {
        console.log("bind");
      },
      inserted(element, binding) {
        console.log("inserted");
      },
      update(element, binding) {
        console.log("update");
      }
    }
  },
  computed: {},
  methods: {
    submit() {
      this.$set(this.student, "sex", "男");
    },
    addClick() {
      this.objArr.unshift({ name: "luzi", age: 23 });
    },
    updateClick() {
      //   this.$set(this.hodArr, 0, "开车");
      //   this.hodArr.splice(0, 2, "开车", "泡妞");
      this.hodArr.splice(0, 1, "开车");
    },
    findClick() {
      this.find++;
    },
    // 限制input耨他只能输入3位小数
    changePerShrOwn(e) {
      console.log(e);
      let val = e.target.value;
      let obj = val.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, "$1$2.$3"); //只能输入3个小数
      console.log(obj);
      if (obj > 100) {
        obj = 100;
      }
      this.perShrOwn = obj;
    },
    // 限制input耨他只能输入3位小数
    clearNoNum(obj) {
      if (obj.substr(0, 1) == ".") {
        obj = obj.replace(/./g, "");
      }
      console.log(obj);
      obj = obj.replace(/[^\d.]/g, ""); //清除除了“数字”和“.”以外的字符
      obj = obj.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
      obj = obj
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
      obj = obj.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, "$1$2.$3"); //只能输入3个小数

      if (obj.indexOf(".") < 0 && obj != "") {
        //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        obj = parseFloat(obj);
      }

      console.log(obj);
      if (!obj) {
        obj = 0;
      } else if (obj > 100) {
        obj = 100;
      }

      this.perShrOwn1 = obj;
      console.log(111);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.elinput >>> .el-input {
  width: 280px;
}
</style>
