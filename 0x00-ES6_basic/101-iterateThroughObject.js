export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;
  const employeeLists = Object.values(allEmployees);
  const flattenedEmployees = [].concat(...employeeLists);
  return flattenedEmployees.join(' | ');
}
