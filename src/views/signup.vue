<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎注册
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <div class="login-name">
                            <h2>临床试验</h2>
                            <div class="line-center"></div>
                        </div>
                        <FormItem prop="Name">
                            <label for="new_user_name">全名</label>
                            <Input v-model="form.Name" placeholder="请输入全名">
                            </Input>
                        </FormItem>
                        <FormItem prop="userName">
                            <label for="new_user_username">用户名</label>
                            <Input v-model="form.password" placeholder="请输入用户名">
                            </Input>
                        </FormItem>
                        <FormItem prop="email">
                            <label for="new_user_email">邮箱</label>
                            <Input v-model="form.email" placeholder="请输入邮箱">
                            </Input>
                        </FormItem>
                        <FormItem prop="confirmationemail">
                            <label for="new_user_email_confirmation">确认邮箱</label>
                            <Input v-model="form.confirmationemail" placeholder="请确认邮箱">
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <label for="new_user_password">密码</label>
                            <Input type="password" v-model="form.password" placeholder="请输入至少8位密码">
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>注册</Button>
                        </FormItem>
                        <p class="p-bottom-w3ls">
                            没有收到确认邮件？<a href="">重发一份新邮件</a>
                        </p>
                    </Form>
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
                userName: '',
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

        }
    }
};
</script>

<style>

</style>
