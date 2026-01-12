<template>
  <div class="carousel-container">
    <div class="carousel" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
      <div class="carousel-inner" @click="goToCurrentImage">
        <img
          v-if="currentImage"
          :src="currentImage.image"
          :alt="currentImage.caption"
          class="carousel-image"
        />
      </div>
      <button class="carousel-btn prev" @click="previousImage">❮</button>
      <button class="carousel-btn next" @click="nextImage">❯</button>
      <div class="carousel-caption">
        <p>{{ currentImage?.caption }}</p>
      </div>
      <div class="carousel-indicators">
        <span
          v-for="(img, index) in allImages"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
          class="indicator"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import traditionalphotos from '../data/photos'
import digitalphotos from '../data/digital'
import threeDphotos from '../data/threed'

export default {
  name: 'ImageCarousel',
  data() {
    return {
      allImages: [],
      currentIndex: 0,
      autoPlayInterval: null,
    }
  },
  computed: {
    currentImage() {
      return this.allImages[this.currentIndex]
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.allImages.length
    },
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.allImages.length) % this.allImages.length
    },
    getRandomImages(allPhotos, count = 10) {
      // Create a copy and shuffle
      const shuffled = [...allPhotos].sort(() => Math.random() - 0.5)
      // Return the first 'count' items
      return shuffled.slice(0, Math.min(count, shuffled.length))
    },
    goToCurrentImage() {
      const currentId = this.currentImage.id
      const currentImage = this.currentImage

      // Determine which category the image belongs to by checking all categories
      if (traditionalphotos.some((p) => p.id === currentId && p.image === currentImage.image)) {
        this.$router.push(`/traditional/${currentId}`)
      } else if (digitalphotos.some((p) => p.id === currentId && p.image === currentImage.image)) {
        this.$router.push(`/digital/${currentId}`)
      } else {
        this.$router.push(`/threed/${currentId}`)
      }
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextImage()
      }, 5000)
    },
    pauseAutoPlay() {
      clearInterval(this.autoPlayInterval)
    },
  },
  created() {
    const allPhotos = [...traditionalphotos, ...digitalphotos, ...threeDphotos]
    this.allImages = this.getRandomImages(allPhotos, 10)
  },
  mounted() {
    this.startAutoPlay()
  },
  beforeUnmount() {
    this.pauseAutoPlay()
  },
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  padding: 2rem 0;
}

.carousel {
  cursor: pointer;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fff;
}

.carousel-image {
  width: 100%;
  height: 500px;
  object-fit: contain;
  display: block;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
  transition: background 0.3s;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-btn.prev {
  left: 0;
}

.carousel-btn.next {
  right: 0;
}

.carousel-caption {
  padding: 1.5rem;
  text-align: center;
  background: #f9f9f9;
  font-size: 1.1rem;
  color: #333;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f9f9f9;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active {
  background: #333;
}

@media (max-width: 600px) {
  .carousel-image {
    height: 300px;
  }

  .carousel-btn {
    padding: 0.75rem;
    font-size: 1rem;
  }
}
</style>
