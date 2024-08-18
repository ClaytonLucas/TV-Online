<template>
    <div>
        <div class="flex-container"   @click="cardsPage(title)">
            <span class="categoria">{{title}}</span>
            <span class="ver_mais">Ver mais</span>
        </div>
        
        <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="(n, index) in 7" :key="index">
            <v-card class="carousel__item" @click="playerRoute(filmes[index].link)">
                <v-img
                    
                    :src="filmes[index].imagem "
                    cover
                ></v-img>
            </v-card>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
        </Carousel>
        </div>
</template>
<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    props:{
        title: String,
        filmes: Array
    },
    data(){
        return {}
        
    },
    methods:{
        playerRoute(link){
            this.$router.push({path: `/player/${encodeURIComponent(link)}`})
        },
        cardsPage(title){
            this.$router.push({path: `/seemore/${title}`})
        }
    }
}
</script>
<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: blue;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.flex-container{
    display: flex;
    justify-content: space-between;
    padding: 10px; 
    margin: 10px;
    cursor: pointer;
}
.categoria{
    color: gray;
    order: 1; 
    text-align: left; 
    flex: 1; 
}
.categoria:hover{
    color: lightblue;
}
.ver_mais:hover{
    color: lightskyblue;
}
.ver_mais:active{
    transform: scale(0.9);
}
.ver_mais{
    order: 2; 
    text-align: right;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>