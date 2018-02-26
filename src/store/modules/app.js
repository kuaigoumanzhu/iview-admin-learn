import Cookies from 'js-cookie'
import Vue from 'vue'

const app={
    state:{
        
    },
    mutations:{
        //登录头像
        setAvator (state,path){
            localStorage.avatorImgPath=path
        }
    }
}

export default app