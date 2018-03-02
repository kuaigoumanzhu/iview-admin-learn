<template>
  <div>
        <blade :bladeId="bladeId" @on-update="update" @on-add="add">
            <Card :bordered="false">
            <p slot="title">首页视图</p>
            <p></p>
            </Card>
        </blade>
  </div>
</template>

<script>
import blade from "@/views/blade-components/navigation/bladeNavigation";
export default {
  name: "blade1",
  methods: {
    update() {
      console.log("修改");
      this.$store.commit('addComponent',{routeName:this.$route.name,component:'blade2',name:'name2'});
    },
    add() {
      console.log("删除");
    }
  },
  components: {
    blade
  },
  created () {
    this.bladeId = "blade1";
  }
};
</script>

