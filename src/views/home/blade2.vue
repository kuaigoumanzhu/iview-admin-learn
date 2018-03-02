<template>
  <div>
        <blade :bladeId="bladeId" @on-update="update" @on-add="add">
            <Card :bordered="false">
            <p slot="title">修改测试</p>
            <p></p>
            </Card>
        </blade>
  </div>
</template>

<script>
import blade from "@/views/blade-components/navigation/bladeNavigation";
export default {
  name: "blade2",
  methods: {
    update() {
      console.log("修改");
    },
    add() {
      console.log("删除");
    }
  },
  components: {
    blade
  },
  created () {
    this.bladeId = "blade2";
  }
};
</script>

