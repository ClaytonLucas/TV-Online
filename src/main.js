import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import router from './router/index.js'

const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    mdi,
  }
}
const vuetify = createVuetify({
    components,
    directives,
    icons
  })

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
