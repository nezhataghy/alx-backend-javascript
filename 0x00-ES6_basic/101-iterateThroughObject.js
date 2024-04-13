export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  
  for (const key in reportWithIterator) {
    const employees = reportWithIterator[key];
    if (Array.isArray(employees)) {
      result += employees.join(' | ');
      result += ' | ';
    }
  }
  
  // Remove the trailing ' | ' from the end of the string
  result = result.slice(0, -3);
  
  return result;
}
