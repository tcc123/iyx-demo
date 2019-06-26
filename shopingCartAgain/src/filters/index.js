/**
 * 处理html数据
 * @param {string} value  数据
 */
let htmlfilter = value => {
  if (value) {
    value = value.replace(/\r\n/g, '<br/>')
    value = value.replace(/\n/g, '<br/>')
  }
  return value || ''
}
export { htmlfilter }
