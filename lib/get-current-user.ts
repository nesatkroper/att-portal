export async function getCurrentUser() {
  try {
    // In preview mode, we'll return a mock admin user
    // In real app, this would read from cookies
    return {
      id: "1",
      email: "admin@company.com",
      role: "admin",
      employee: {
        employeeId: "emp-1",
        firstName: "John",
        lastName: "Admin",
        employeeCode: "ADM001",
        department: { departmentName: "Administration" },
        position: { positionName: "System Administrator" },
      },
    }
  } catch (error) {
    return null
  }
}
