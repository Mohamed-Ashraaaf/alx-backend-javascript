export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  const departments = Object.keys(employees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const departmentName = departments[currentDepartmentIndex];
      const employeeList = employees[departmentName];

      if (currentEmployeeIndex >= employeeList.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const employee = employeeList[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
