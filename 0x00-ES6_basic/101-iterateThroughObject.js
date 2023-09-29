export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = reportWithIterator.allEmployees;
  const result = [];

  for (const department in allEmployees) {
    result.push(...allEmployees[department]);
  }

  return result.join(' | ');
}
