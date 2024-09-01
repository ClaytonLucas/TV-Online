<template>
    <div>
        <v-app>
            <v-app-bar>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>TV Online</v-toolbar-title>
            </v-app-bar>
            <div class="movies-container">
                <div v-for="(n, index) in conteudo[0][category]" :key="index">
                    <h2>{{ n.nome }}</h2>
                    <v-card class="carousel__item" @click="playerRoute(n.link)">
                        <v-img
                            
                            :src="n.imagem "
                            cover
                        ></v-img>
                    </v-card>
                        <!-- {{n}}
                        {{index}} -->
                </div>
                <!-- {{ canais }}
                {{category}}
                {{ conteudo[0][category][1] }} -->
            </div>
        </v-app>
        
    </div>
</template>
<script>
    
    import conteudo from "../canais.js"
    export default{
        props:  {
            category:{
                type: String,
                required: true
            } 
            
        },
        data(){
            return{
                conteudo: conteudo
            }
        },
        methods:{
        goBack(){
            this.$router.back(-1);
        },
        playerRoute(link){
            this.$router.push({path: `/player/${encodeURIComponent(link)}`})
        },
        // computed: {
        //     canais() {
        //     return this.conteudo[0][this.category] 
        //     }
        // }
    }
    }
</script>
<style>
.movies-container {
  /* display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px; */
  padding: 16px;
  display: grid;
}
.carousel__item {
    display: inline-block;
    background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(100% - 32px); /* Full width for small screens */
  max-width: 300px; /* Max width for large screens */
  margin: 16px;
  text-align: center;
  flex: 1 1 calc(100% - 32px);
}
@media (min-width: 600px) {
  .carousel__item {
    flex: 1 1 calc(50% - 32px); /* 2 cards por linha em telas médias */
  }
}

@media (min-width: 900px) {
  .carousel__item {
    flex: 1 1 calc(33.33% - 32px); /* 3 cards por linha em telas grandes */
  }
}

</style>