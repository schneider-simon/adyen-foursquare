export default class Venue {
  constructor({name = "", geoCoordinates = null, address = "", categories = []}) {
    this.name = name
    this.geoCoordinates = geoCoordinates
    this.address = address
  }
}