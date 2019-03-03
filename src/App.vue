<template>
  <v-app>
    <v-toolbar class="red lighten-1 white--text">
      <v-toolbar-title>
        <router-link to='/' class='title'>
          {{ title }}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to='/' flat color='white'>Inicio</v-btn>
        <v-btn to='/career' flat color='white'>Carreras</v-btn>
        <v-btn to='/gallery' flat color='white'>Galería</v-btn>
        <v-btn to='/contact' flat color='white'>Contacto</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="blue darken-4">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Centro Técnico Vocacional William Cornelius
            <v-icon class="white--text">copyright</v-icon>
            2019
            Todos los derechos reservados. Guatemala
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent'

export default {
  name: 'App',
  components: {
    HomeComponent
  },
  data () {
    return {
      title: 'Centro Técnico Vocacional William Cornelius'
    }
  }
}
</script>

<style type="text/css" media="screen">
  .title {
    text-decoration: none;
    color: white;
  }
</style>