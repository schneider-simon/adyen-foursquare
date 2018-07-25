import Venue from "../models/Venue"

export const getVenuesFromApiResponse = (response) => {
  const allItems = response.groups.reduce((items, group) => {
    return items.concat(group.items)
  }, [])

  return allItems.map(item => {
    return new Venue({
      name: item.venue.name,
      geoCoordinates: {lat: item.venue.location.lat, lng: item.venue.lng},
      address: item.venue.location.formattedAddress.join(",")
    })
  })
}