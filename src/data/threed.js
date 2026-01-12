import { loadPhotos } from '../utils/loadPhotos'

const customizations = {
  1: { caption: 'cloud', name: 'cloud' },
}

const modules = import.meta.glob('../assets/3d/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', {
  eager: true,
})
const photos = loadPhotos(modules, customizations)

export default photos
