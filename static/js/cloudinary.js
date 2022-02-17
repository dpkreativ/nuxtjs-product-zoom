const cloudName = 'dpkreativ'

const productGallery = cloudinary.galleryWidget({
  container: '#product-gallery',
  cloudName: cloudName,
  mediaAssets: [{ tag: 'handbag' }],
})

productGallery.render()
