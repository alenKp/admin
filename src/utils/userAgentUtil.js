/* eslint-disable no-use-before-define */
/* eslint-disable no-cond-assign */
/* eslint-disable prettier/prettier */
export function getBrowser(n) {
  let ua = navigator.userAgent.toLowerCase(),
    s,
    name = '',
    ver = 0;
  // eslint-disable-next-line prettier/prettier
  // eslint-disable-next-line no-use-before-define
  (s = ua.match(/msie ([\d.]+)/)) ? _set('ie', _toFixedVersion(s[1])):
    (s = ua.match(/firefox\/([\d.]+)/)) ? _set('firefox', _toFixedVersion(s[1])) :
    (s = ua.match(/chrome\/([\d.]+)/)) ? _set('chrome', _toFixedVersion(s[1])) :
    (s = ua.match(/opera.([\d.]+)/)) ? _set('opera', _toFixedVersion(s[1])) :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? _set('safari', _toFixedVersion(s[1])) : 0
  function _toFixedVersion(ver, floatLength) {
    ver = ('' + ver).replace(/_/g, '.')
    floatLength = floatLength || 1
    ver = String(ver).split('.')
    ver = ver[0] + '.' + (ver[1] || '0')
    ver = Number(ver).toFixed(floatLength)
    return ver
  }
  function _set(bname, bver) {
    name = bname
    ver = bver
  }
  return n == 'n' ? name : n == 'v' ? ver : name + ver
}
