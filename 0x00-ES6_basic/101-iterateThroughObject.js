export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const department in reportWithIterator.allEmployees) {
    for (const employee of reportWithIterator.allEmployees[department]) {
      employeeNames.push(employee);
    }
  }

  return employeeNames.join(' | ');
}
