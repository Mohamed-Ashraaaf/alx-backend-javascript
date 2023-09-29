export default function createIteratorObject(report) {
  const employeeNames = [];

  for (const departmentEmployees of Object.values(report.allEmployees)) {
    for (const employee of departmentEmployees) {
      employeeNames.push(employee);
    }
  }

  return employeeNames;
}
