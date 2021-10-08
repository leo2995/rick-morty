<template>
    <div>
        <h1>Locais</h1>
        <h1>Lista Locais</h1>
        <span>{{listLocais}}</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name:"Locais",
    mounted(){
        this.getLocais()
  },
  methods:{
    ...mapActions('local', ['getLocais'])
  },
  computed:{
    ...mapGetters("local", ["listLocais"]),
    
  }
}
</script>

<style>

</style>