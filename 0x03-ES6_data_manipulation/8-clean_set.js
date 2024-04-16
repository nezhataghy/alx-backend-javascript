export default function cleanSet(set, startString) {
  const Array = [];
  if (startString !== '' && typeof startString === 'string') {
    for (let element of set) {
      if (element && element.startsWith(startString)) {
        element = element.replace(startString, '');
        Array.push(element);
      }
    }
    return Array.join('-');
  }
  return '';
}
