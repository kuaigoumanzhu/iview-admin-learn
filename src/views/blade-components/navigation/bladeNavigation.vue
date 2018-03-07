<template>
    <div>
        <div class="blade" ref="wraper">
            <div class="blade-wrapper blade-content">
                <div class="blade-nav">
                        <ul class="menu __inline">
                            <li class="menu-item __minimize" v-show="maximized">
                                <button>最小化</button>
                            </li>
                            <li class="menu-item __maximize" v-show="!maximized">
                                最大化
                            </li>
                            <li class="menu-item __close" @click="closeBlade" :class="{'__disabled':isClosingDisabled}">

                            </li>
                        </ul>
                </div>
                <header class="blade-head">
                    <div class="blade-t">
                        <i class="blade-t_ico ivu-icon ivu-icon-briefcase"></i>
                        <p class="blade-t_head">{{title}}</p>
                    </div>
                    <div class="blade-toolbar">
                        <ul class="menu __inline">
                            <li class="menu-item" v-for="toolbarCommand in toolbarCommands" :key="toolbarCommand.name">
                                <button class="menu-btn" @click="emitBtn(toolbarCommand.executeMethod)">
                                    <i class="menu-ico" :class="toolbarCommand.icon"></i>
                                    {{toolbarCommand.name}}
                                </button>
                            </li>
                        </ul>
                    </div>
                </header>
                <div class="blade-container">
                    <slot></slot>
                </div>
            </div>
        </div>      
    </div>  
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  props: {
      isClosingDisabled: {
          type: Boolean,
          default: true
      },
      maximized: {
          type: Boolean,
          default: false
      },
      bladeId: String    
  },
  data () {
      return {
          title: '修改',
          toolbarCommands: [],
          // split

      }
  },
  mounted () {
      this.toolbarCommands=this.$store.state.blades.routeName[this.$route.name][this.bladeId];
      this.title='视图';      
  },
  computed: {
      leftSize () {

      },
      triggerLeft () {

      }        
  },
  methods: {
    emitBtn(executeMethod) {
      this.$emit(executeMethod);
    },
    closeBlade () {
        console.log(...mapMutations(['addComponent']));
        this.$store.commit('delBladeId',this);
    },
    // split
    handleMouseup () {

    },
    handleMousemove () {

    },
    handleMouseout () {

    },
    handleMousedown () {

    }
  }
};
</script>

<style scoped lang="less">
@import "../bladeNavigation.css";

.split-pane {
    position: relative;
    &-trigger{
        position: absolute;
        z-index: 3;
        background: #BDBDBD;
    }
}
.custom-trigger {
  position: absolute;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1),
    2px 2px 10px 2px rgba(0, 0, 0, 0.2) inset;
  border: 1px solid #c3c3c3;
  cursor: pointer;
}
</style>

