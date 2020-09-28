/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  if (str.length < 6) {
    return 0
  } else {
    return 1
  }
}

export function validEmail(str) {
  if (str.length < 6) {
    return 0
  } else {
    return 1
  }
}
