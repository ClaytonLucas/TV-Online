<template>
  <div>
  <v-app>
    <v-app-bar>
      <v-btn icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>TV Online</v-toolbar-title>
    </v-app-bar>
    <VideoPlayer :src="decodedVideoLink"></VideoPlayer>
  </v-app>
    
    
    
  </div>
</template>
  
<script>
import VideoPlayer from "../components/VideoPlayer.vue"

export default {
components: {
    VideoPlayer
},
props: {
    Link: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack(){
      console.log(this.$router);
      this.$router.back(-1);
      
    }
  },
  computed: {
    decodedVideoLink() {
      return decodeURIComponent(this.Link)
    }
  }
};
</script>