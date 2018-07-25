import Venue from "../models/Venue"

/**
 * Maps the API response to a list of Venues.
 *
 * @param response
 * @returns {Venue[]}
 */
export const mapVenuesFromApiResponse = (response) => {
  const allItems = response.groups.reduce((items, group) => {
    return items.concat(group.items)
  }, [])

  return allItems.map(item => {
    return new Venue({
      id: item.venue.id,
      name: item.venue.name,
      geoCoordinates: {lat: item.venue.location.lat, lng: item.venue.lng},
      address: item.venue.location.formattedAddress.join(","),
      categories: item.venue.categories,
      icon: getIconFromApiResponseCategories(item.venue.categories),
      url: `https://foursquare.com/v/${item.venue.id}`
    })
  })
}

/**
 * Get the largest icon from the API response.
 * @param categories
 * @returns {*}
 */
export const getIconFromApiResponseCategories = (categories) => {
  if (!categories || categories.length === 0) {
    return null
  }

  const mainIcon = categories[0].icon

  return `${mainIcon.prefix}64${mainIcon.suffix}`
}