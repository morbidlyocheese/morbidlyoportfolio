/**
 * Factory function to process photos from a glob import
 * @param {object} modules - The modules object from import.meta.glob
 * @param {object} customizations - Object mapping filenames to { caption, name } overrides
 * @returns {array} Array of photo objects with id, image, caption, name, description
 */
export function loadPhotos(modules, customizations = {}) {
  const photos = []
  let id = 1

  Object.entries(modules).forEach(([path, mod]) => {
    const imageUrl = mod.default || mod
    const filename = path.split('/').pop()
    const filenameStem = filename.replace(/\.[^/.]+$/, '')

    if (imageUrl) {
      const override = customizations[filenameStem] || customizations[filename]

      photos.push({
        id: id++,
        caption: override?.caption || filenameStem,
        description: '',
        name: override?.name || filenameStem,
        image: imageUrl,
      })
    }
  })

  return photos
}
