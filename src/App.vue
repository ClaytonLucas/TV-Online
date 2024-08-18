<template>
  <div>
    <!-- <v-text-field append-inner-icon="mdi-magnify" label="Label"></v-text-field>  -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
   
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
