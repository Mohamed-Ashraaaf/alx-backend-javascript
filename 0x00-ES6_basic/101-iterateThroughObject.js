export default function iterateThroughObject(reportWithIterator) {
  const employees = Object.values(reportWithIterator.allEmployees).flat();
  return employees.join(' | ');
}
