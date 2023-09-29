export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  
  for (const department in reportWithIterator.allEmployees) {
    const employees = reportWithIterator.allEmployees[department];
    
    for (const employee of employees) {
      result.push(employee);
    }
  }

  return result.join(' | ');
}
