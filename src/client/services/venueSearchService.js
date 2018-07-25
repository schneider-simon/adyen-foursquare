import {isEmpty} from "../helpers/validation"
import constants from "../constants"
import {capitalizeFirstLetter} from "../helpers/stringHelpers"

export const searchParametersValid = (parameters) => {
  //TODO: Use validation library
  return isEmpty(parameters.ll) && isEmpty(parameters.near)
}

export const getVenueSectionOptions = () => {
  return constants.VENUE_SECTIONS.map(section => {
    return {
      key: section,
      label: capitalizeFirstLetter(section)
    }
  })
}