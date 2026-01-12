<template>
  <div class="gallery container">
    <div class="grid">
      <div v-for="photo in photos" :key="photo.id" class="grid-item">
        <GalleryCard :photo="photo" :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from './GalleryCard.vue'

export default {
  name: 'GalleryGrid',
  components: { GalleryCard },
  props: {
    photos: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
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
