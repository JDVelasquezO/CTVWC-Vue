<template>
  <div class="galley">
  	<br>
    <v-carousel>
	    <v-carousel-item
	      v-for="(item,i) in items"
	      :key="i"
	      :src="item.src"
	    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://as01.epimg.net/deporteyvida/imagenes/2018/03/16/portada/1521222830_942594_1521222954_noticia_normal.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>
