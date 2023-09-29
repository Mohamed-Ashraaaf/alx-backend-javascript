export default function iterateThroughObject(reportWithIterator) {
  if (Array.isArray(reportWithIterator)) {
    return reportWithIterator.join(' | ');
  }
  
  return '';
}
