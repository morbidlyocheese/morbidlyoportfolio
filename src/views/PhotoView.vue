<template>
  <GalleryView category="traditional" :photos="photos" />
</template>

<script>
import GalleryView from '../components/GalleryView.vue'
import photos from '../data/photos'

export default {
  name: 'PhotoView',
  components: { GalleryView },
  data() {
    return {
      photos,
    }
  },
}
</script>
