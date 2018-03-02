import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import blades from './modules/blade';

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{

    },
    mutations:{

    },
    modules:{
        app,
        user,
        blades 
    }
})

export default store