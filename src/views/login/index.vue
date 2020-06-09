<template>
    <div class="login-container">
        <el-form 
        :model="ruleForm" 
        status-icon 
        :rules="rules" 
        ref="ruleForm" 
        label-width="100px" 
        class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        const validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                callback();
            }
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return{
            ruleForm:{
                username:'',
                pass:''
            },
            rules: {
                username: [
                    { validator: validateName, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="less" scoped>
@bg:#283443;
@light_gray:#fff;
@cursor: #fff;
.login-container{
    width: 100%;
    background-color: #2d3a4b;
    min-height: 100vh;
}
.demo-ruleForm{
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
}
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: @light_gray;
            height: 47px;
            caret-color: @cursor;
        }
    }
    .el-button {
        height: 47px;
        width: 85%;
        margin-bottom:30px;
    }
}
</style>