<template>
  <div class="gallery-view">
    <section class="photo-container">
      <div class="container">
        <!-- Gallery view when no ID is provided -->
        <GalleryGrid v-if="!hasId" :photos="photos" :category="category" />

        <!-- Detail view when ID is provided -->
        <div v-else class="photo-image has-text-centered">
          <div>
            <img
              v-if="photo && photo.image"
              :src="photo.image"
              :alt="photo.name || photo.caption"
            />
          </div>
          <div class="photo-caption">
            <p class="caption">{{ photo.caption }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GalleryGrid from '../components/GalleryGrid.vue'

export default {
  name: 'GalleryView',
  components: { GalleryGrid },
  props: {
    category: {
      type: String,
      required: true,
    },
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      photo: {},
      hasId: false,
    }
  },
  watch: {
    '$route.params.id'(newId) {
      const ID = Number(newId)
      this.hasId = !!ID && !isNaN(ID)
      if (this.hasId) {
        this.photo = this.photos.find((p) => p.id === ID) || { caption: '', name: '', image: '' }
      }
    },
  },
  created() {
    const ID = Number(this.$route.params.id)
    this.hasId = !!ID && !isNaN(ID)
    if (this.hasId) {
      this.photo = this.photos.find((p) => p.id === ID) || { caption: '', name: '', image: '' }
    }
  },
}
</script>

<style scoped>
.gallery-view {
  margin-top: 30px;
  padding: 2rem 0;
}

.photo-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
}

.photo-image img {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.photo-container {
  display: flex;
  justify-content: center;
  padding: 0;
}

.photo-container .container {
  width: 100%;
  padding: 0 2rem;
}

.photo-caption {
  text-align: center;
}

.caption {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}
</style>
