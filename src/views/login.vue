<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <div class="login-name">
                            <h2>临床试验</h2>
                            <div class="line-center"></div>
                        </div>
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="18" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="18" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <div class="remember-me checkbox">
                            <label for="user_remember_me">
                                <input name="user[remember_me]" value="0" type="hidden">
                                <input class="remember-me-checkbox" value="1" name="user[remember_me]" id="user_remember_me" type="checkbox">
                                <span>记住密码</span>
                            </label>
                            <div class="pull-right forgot-password">
                                <a href="#">忘记密码？</a>
                            </div>
                        </div>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="p-bottom-w3ls">
                        <a href="signup.html">点击注册</a>     如果你没有一个帐户。
                    </p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            form: {
                userName: 'admin',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid)=>{
                if(valid){
                    if(this.form.password!=='123qwe'){
                        this.$Message.error('密码错误！');
                        return;
                    }
                    Cookies.set('user',this.form.userName)
                    Cookies.set('password',this.form.password)
                    this.$store.commit('setAvator','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg')
                    if(this.form.userName==='admin'){
                        Cookies.set('access',0);
                    }else{
                        Cookies.set('access',1);
                    }
                    this.$router.push({
                        name:'home_index'
                    });
                }
            })
        }
    }
};
</script>

<style>

</style>
