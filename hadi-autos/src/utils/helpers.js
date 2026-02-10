export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
}

export const formatMileage = (mileage) => {
  return mileage.toLocaleString('en-US') + ' km'
}

export const getLocationText = (location) => {
  return location === 'canada' ? 'Canada' : 'Ghana'
}

export const getStatusColor = (status) => {
  const colors = {
    available: 'green',
    reserved: 'yellow',
    sold: 'red',
  }
  return colors[status] || 'gray'
}