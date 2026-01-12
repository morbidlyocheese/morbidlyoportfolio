<template>
  <div class="gallery container">
    <div class="grid">
      <div v-for="photo in photos" :key="photo.id" class="grid-item">
        <ThreeDCard :photo="photo" />
      </div>
    </div>
  </div>
</template>

<script>
import ThreeDCard from './ThreeDCard.vue'
import photos from '../data/threed'

export default {
  name: 'ThreeDGallery',
  components: { ThreeDCard },
  data() {
    return { photos }
  },
}
</script>

<style>
.gallery {
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.5rem;
  align-items: center;
  justify-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 360px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
