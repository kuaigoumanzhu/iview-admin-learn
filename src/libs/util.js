import axios from 'axios';
import env from '../../build/env';
import semver from 'semver';
import packjson from '../../package.json';

let util={

};
util.title = function (title) {
    title=title || '临床试验';
    window.document.title = title;
};

util.getRouterObjByName = function (routers,name){
    if(!name || !routers ||!routers.length){
        return null;
    }
    //debugger
    let routerObj = null;
    for (let item of routers) {
        if (item.name === name){
            return item;
        }
        routerObj=util.getRouterObjByName(item.children,name);
        if(routerObj){
            return routerObj;
        }        
    }
    return null;
}

util.handleTitle=function(vm,item){
    if(typeof item.title === 'object'){
        return vm.$t(item.title.i18n);
    }else{
        return item.title
    }
}

util.setCurrentPath = function (vm,name){
    let title = '';
    let isOtherRouter = false;//main组件非左侧菜单
    vm.$store.state.app.routers.forEach(item => {
        
    });
}

