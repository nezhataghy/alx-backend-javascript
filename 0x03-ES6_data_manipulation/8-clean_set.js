export default function cleanSet(set, startString) {
  const Array = [];
  if (startString !== '' && typeof startString === 'string') {
    for (const element of set) {
      if (element.startsWith(startString)) {
        const restOfElement = element.slice(startString.length);
        Array.push(restOfElement);
      }
    }
    return Array.join('-');
  }
  return '';
}
