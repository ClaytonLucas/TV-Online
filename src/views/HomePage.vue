<template>
    <div>
      
      <div v-for="categoria in categorias" v-bind:key="categoria.id">
        <carousel :title="categoria" :filmes="conteudo[0][categoria]"></carousel>
      </div>
      <!-- <adsense></adsense> -->
    </div>
  </template>
  
  <script>
  import carousel from "../components/carousel.vue"
  import conteudo from "../canais.js"
  import { onMounted } from 'vue';
  // import adsense from "../components/AdsenseAd.vue"
  
  export default {
    name: 'HomePage',
    components: {
      carousel,
      // adsense
    },
    data(){
      return {
        categorias:["TV Aberta","Desenho", "Esportes", "Filmes", "Variedades", "Notícias"],
        conteudo: conteudo
      }
      
    },
    methods:{
  
    },
      setup(){
          onMounted(() => {
            // opcoes.foreach()
            //   console.log(this.opcoes)
  
            // let opcoes = ["TV Aberta","Desenho", "Esportes", "Filmes", "Variedades", "Notícias"]
            // opcoes.forEach((item) => {console.log(canais[0][item])})
          })
      }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  
  </style>
  