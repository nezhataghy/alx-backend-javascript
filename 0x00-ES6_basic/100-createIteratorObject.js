export default function createIteratorObject(report) {
  const employeeArrays = Object.values(report.allEmployees);
  const allEmployees = employeeArrays.flat();
  return allEmployees;
}
