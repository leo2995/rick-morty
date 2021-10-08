<template>
<div>
     <h1>detalhes</h1>
    <span>{{listDetalhesPersonagem}}</span>
</div>
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Detalhes',
    mounted(){
        this.getPersonagemById(this.$route.params.id)
    },
    methods:{
        ...mapActions('personagem', ['getPersonagemById'])
    },
    computed:{
        ...mapGetters('personagem', ['listDetalhesPersonagem'])
    }
}
</script>

<style>

</style>