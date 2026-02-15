// Centralized image mappings for all vehicles
export const vehicleImageMappings = {
  1: ['1.avif', '2.webp', '3.webp', '4.webp', '5.webp'],
  2: ['3.webp', '6.avif', '2.webp', '4.webp', '7.avif'],
  3: ['2.webp', '9.avif', '3.webp', '4.webp', '10.webp'],
  4: ['12.jpg', '11.webp', '10.webp', '1.avif', '5.webp'],
  5: ['5.webp', '10.webp', '12.jpg', '2.webp', '9.avif'],
  6: ['7.avif', '6.avif', '3.webp', '8.avif', '4.webp'],
  7: ['10.webp', '3.webp', '2.webp', '11.webp', '6.avif'],
  8: ['1.avif', '10.webp', '12.jpg', '2.webp', '7.avif'],
  9: ['13.webp', '10.webp', '12.jpg', '2.webp', '7.avif'],
  10: ['8.avif', '9.avif', '11.webp', '13.webp', '1.avif'],
  11: ['4.webp', '5.webp', '6.avif', '7.avif', '8.avif'],
  12: ['2.webp', '3.webp', '9.avif', '10.webp', '11.webp'],
  13: ['1.avif', '4.webp', '7.avif', '10.webp', '13.webp'],
  14: ['5.webp', '8.avif', '11.webp', '12.jpg', '2.webp'],
  15: ['6.avif', '9.avif', '12.jpg', '13.webp', '3.webp'],
  16: ['1.avif', '2.webp', '3.webp', '4.webp', '6.avif'],
  17: ['7.avif', '8.avif', '9.avif', '10.webp', '11.webp'],
  18: ['12.jpg', '13.webp', '1.avif', '5.webp', '7.avif'],
  19: ['2.webp', '4.webp', '6.avif', '8.avif', '10.webp'],
  20: ['3.webp', '5.webp', '7.avif', '9.avif', '11.webp']
}

// Default fallback images
export const defaultImages = ['1.avif', '2.webp', '3.webp', '4.webp', '5.webp']

// Helper function to get images for a vehicle
export const getVehicleImages = (vehicleId) => {
  const images = vehicleImageMappings[vehicleId] || defaultImages
  return images.map(filename => `/images/${filename}`)
}

// Helper function to get main image for a vehicle (for cards, listings, etc.)
export const getVehicleMainImage = (vehicleId) => {
  const images = vehicleImageMappings[vehicleId] || defaultImages
  return `/images/${images[0]}`
}

// Helper function to get all image filenames for a vehicle (without paths)
export const getVehicleImageFilenames = (vehicleId) => {
  return vehicleImageMappings[vehicleId] || defaultImages
}