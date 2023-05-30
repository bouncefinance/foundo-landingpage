export const getElementTop = function (el: any) {
  let actualTop = el.offsetTop;
  let current = el.offsetParent;

  while (current !== null) {
    actualTop += current?.offsetTop || 0;
    current = current?.offsetParent;
  }

  return actualTop;
}
