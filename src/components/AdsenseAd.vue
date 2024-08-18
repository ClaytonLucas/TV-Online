<!-- src/components/AdsenseAd.vue -->
<template>
    <div>
      <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3334892191851007"
     crossorigin="anonymous"></script> -->
    <!-- anuncio quadrado -->
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-3334892191851007"
        data-ad-slot="7437691914"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <!-- <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script> -->
      
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdsenseAd',
    mounted() {
      // Inicializa os anúncios do Google AdSense
    //   (adsbygoogle = window.adsbygoogle || []).push({});
    this.getAd()
    },
    methods:{
      async getAd() {
        const url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3334892191851007";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

         
          console.log(response);
        } catch (error) {
          console.error(error.message);
        }
      }
    }
      
  }
  </script>
  
  <style scoped>
  /* Adicione qualquer estilo específico ao bloco de anúncios aqui */
  </style>
  