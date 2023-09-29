export default function iterateThroughObject(reportWithIterator) {
  return Object.values(reportWithIterator.allEmployees).flatMap(employeeArray => employeeArray).join(' | ');
}
