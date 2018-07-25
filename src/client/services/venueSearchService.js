import {isEmpty} from "../helpers/validation"
import constants from "../constants"
import {capitalizeFirstLetter} from "../helpers/stringHelpers"

/**
 * Rudimentary check if search parameters are valid.
 *
 * @param parameters
 * @returns {boolean}
 * @TODO: Use validation library
 */
export const searchParametersValid = (parameters) => {
  return isEmpty(parameters.ll) && isEmpty(parameters.near)
}

/**
 * Transform the venue sections from constants to option objects with keys and labels.
 *
 * @returns {{key: string, label: string}[]}
 */
export const getVenueSectionOptions = () => {
  return constants.VENUE_SECTIONS.map(section => {
    return {
      key: section,
      label: capitalizeFirstLetter(section)
    }
  })
}