import {
  ADD_SEGMENT,
  REMOVE_SEGMENT,
  MOVE_SEGMENT,
  REPLACE_STREET_DATA,
  CHANGE_SEGMENT_WIDTH,
  CHANGE_SEGMENT_VARIANT,
  // BUILDINGS
  ADD_BUILDING_FLOOR,
  REMOVE_BUILDING_FLOOR,
  SET_BUILDING_FLOOR_VALUE,
  SET_BUILDING_VARIANT
} from './'

export function addSegment (index, segment) {
  return {
    type: ADD_SEGMENT,
    index,
    segment
  }
}

export function removeSegment (index) {
  return {
    type: REMOVE_SEGMENT,
    index
  }
}

export function moveSegment (index, newIndex) {
  return {
    type: MOVE_SEGMENT,
    index,
    newIndex
  }
}

// temporary while we migrate data stores
export function updateStreetData (street) {
  return {
    type: REPLACE_STREET_DATA,
    street
  }
}

export function changeSegmentWidth (index, width) {
  return {
    type: CHANGE_SEGMENT_WIDTH,
    index,
    width
  }
}

export function changeSegmentVariant (index, set, selection) {
  return {
    type: CHANGE_SEGMENT_VARIANT,
    index,
    set,
    selection
  }
}

// Buildings

/**
 * Adds one more building floor
 *
 * @param {string} position - must be 'left' or 'right
 */
export function addBuildingFloor (position) {
  return {
    type: ADD_BUILDING_FLOOR,
    position
  }
}

/**
 * Removes one building floor
 *
 * @param {string} position - must be 'left' or 'right
 */
export function removeBuildingFloor (position) {
  return {
    type: REMOVE_BUILDING_FLOOR,
    position
  }
}

/**
 * Sets building floor to specific value
 *
 * @param {string} position - must be 'left' or 'right
 * @param {Number} value - the value to set it to
 */
export function setBuildingFloorValue (position, value) {
  return {
    type: SET_BUILDING_FLOOR_VALUE,
    position,
    value
  }
}

/**
 * Sets building to a selected variant
 *
 * @param {string} position - must be 'left' or 'right
 * @param {string} variant - the variant to set it to
 */
export function setBuildingVariant (position, variant) {
  return {
    type: SET_BUILDING_VARIANT,
    position,
    variant
  }
}
