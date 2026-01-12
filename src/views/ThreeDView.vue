<template>
  <GalleryView category="threed" :photos="photos" />
</template>

<script>
import GalleryView from '../components/GalleryView.vue'
import photos from '../data/threed'

export default {
  name: 'ThreeDView',
  components: { GalleryView },
  data() {
    return {
      photos,
    }
  },
}
</script>
