export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const department in reportWithIterator.allEmployees) {
    const employees = reportWithIterator.allEmployees[department];
    result += employees.join(' | ') + ' | ';
  }

  return result.slice(0, -3);
}
