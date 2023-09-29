export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const department in reportWithIterator.allEmployees) {
    employeeNames.push(...reportWithIterator.allEmployees[department]);
  }

  return employeeNames.join(' | ');
}
