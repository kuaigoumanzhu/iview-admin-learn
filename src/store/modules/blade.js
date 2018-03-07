import Vue from 'vue';
import Util from '@/libs/util';

const blade = {
    state: {
        routeName: {
            'home_index': {
                blade1:[
                    {
                        name:'修改',
                        executeMethod:'on-update',
                        canExecuteMethod:'true',
                        icon: 'ivu-icon ivu-icon-arrow-shrink'
                    },{
                        name:'添加',
                        executeMethod:'on-add',
                        canExecuteMethod:'true',
                        icon: 'ivu-icon ivu-icon-compose'
                    }
                ],
                blade2:[
                    {
                        name:'修改1',
                        executeMethod:'on-update',
                        canExecuteMethod:'true',
                        icon: ''
                    },{
                        name:'添加1',
                        executeMethod:'on-add',
                        canExecuteMethod:'true',
                        icon: ''
                    }
                ]
            }
        },
        blades: {
            'home_index': [            
            ]
        }
    },
    mutations: {
        addComponent (state,params) {
            state.blades[params.routeName].push({
                component:params.component,
                name:params.name
            });
        },
        delBladeId (state,vm) {
            let blades=state.blades[vm.$route.name];
            let index=blades.findIndex((val)=>{ 
                console.log(val.component)
                return val.component==vm.bladeId                
            });
            if(index >= 0){
                blades.splice(index);
            }
        }
    }
}

export default blade