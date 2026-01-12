<template>
  <GalleryView category="digital" :photos="photos" />
</template>

<script>
import GalleryView from '../components/GalleryView.vue'
import photos from '../data/digital'

export default {
  name: 'DigitalView',
  components: { GalleryView },
  data() {
    return {
      photos,
    }
  },
}
</script>
