<template>
  <div class="photo-card">
    <router-link :to="'/threed/' + photo.id" class="card-link">
      <div class="card">
        <img v-if="photo.image" class="card-img" :src="photo.image" :alt="photo.caption" />
        <div class="card-content">
          <p class="title">{{ photo.name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ThreeDCard',
  props: ['photo'],
}
</script>

<style>
.card-link {
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.card {
  position: relative;
  height: 200px;
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s;
}

.card-link:hover .card {
  transform: scale(1.05);
}

.card-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45));
  padding: 0.75rem;
}
</style>
