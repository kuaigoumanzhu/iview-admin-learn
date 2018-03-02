<template>
    <div>
        <Card :padding="0">
            <div class="split-pane-con">
                <split-pane ref="pane" :style="{height: '100%'}" direction="horizontal" v-model="triggerOffsetMin">
                                    <div slot="left" style="background: #EDACE2;height: 100%;"></div>
                                    <div slot="trigger" 
                                        :style="{left: triggerOffsetMin + '%'}" 
                                        @mousedown="handleMousedown"
                                        class="custom-trigger"></div>
                                    <div slot="right" style="background: #A2EDB6;height: 100%;"></div>
                </split-pane>
            </div>
        </Card>
    </div>
</template>
<script>
import splitPane from "./split-pane";
export default {
  name: "split-pane-page",
  components: {
    splitPane
  },
  data() {
    return {
      triggerOffset: "300px",
      triggerOffsetV: 70,
      triggerOffsetMin: 40,
      atMax: false,
      atMin: false
    };
  },
  methods: {
    handleMousedown(e) {
      this.$refs.pane.handleMousedown(e);
    },
    handleMoving(e) {
      this.atMax = e.atMax;
      this.atMin = e.atMin;
    }
  }
};
</script>
<style lang="less" scoped>
.split-pane-con {
  width: 100%;
  height: 89vh;
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
.introduce-left-con h4 {
  margin-bottom: 20px;
}
.introduce-left-con h5 {
  margin-bottom: 10px;
  margin-left: 20px;
}
.split-pane-right-con {
  padding: 30px;
}
.split-pane-right-con p {
  font-size: 26px;
  font-weight: 700;
  color: white;
}
</style>

