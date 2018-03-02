<template>
    <div>
        <article class="cnt" role="main">
            <div class="cnt-inner">
                <component :is="blade.component" v-for="blade in blades" :key="blade.name"></component>        
            </div>
        </article>        
    </div>
</template>
<script>
import blade1 from './blade1'
import blade2 from './blade2'
export default {
  data(){
      return {
          blades: []
      }
  },
  methods: {
  },
  components: {
      blade1,
      blade2
  },
  mounted () {      
      var route_Name=this.$route.name;
      console.log(route_Name);
      this.$store.commit('addComponent',{routeName:route_Name,component:'blade1',name:'name1'});
      this.blades=this.$store.state.blades.blades[route_Name];
  }
}
</script>


