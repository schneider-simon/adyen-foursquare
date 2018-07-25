export default class Venue {
  constructor({id = "", name = "", geoCoordinates = null, address = "", categories = [], icon = null, url = null}) {
    this.id = id
    this.name = name
    this.geoCoordinates = geoCoordinates
    this.address = address
    this.categories = categories
    this.icon = icon
    this.url = url
  }

  getCategoriesLabel() {
    return this.categories
      .map(category => category.name)
      .join(", ")
  }

  hasIcon() {
    return this.icon && this.icon.length > 0
  }
}