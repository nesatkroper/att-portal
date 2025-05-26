interface User {
  id: string
  email: string
  role: string
  employee?: {
    employeeId: string
    firstName: string
    lastName: string
    employeeCode: string
    department: { departmentName: string }
    position: { positionName: string }
  }
}

// Mock users data
const mockUsers = [
  {
    id: "1",
    email: "admin@company.com",
    password: "password123", // In real app, this would be hashed
    role: "admin",
    employee: {
      employeeId: "emp-1",
      firstName: "John",
      lastName: "Admin",
      employeeCode: "ADM001",
      department: { departmentName: "Administration" },
      position: { positionName: "System Administrator" },
    },
  },
  {
    id: "2",
    email: "employee@company.com",
    password: "password123",
    role: "employee",
    employee: {
      employeeId: "emp-2",
      firstName: "Jane",
      lastName: "Smith",
      employeeCode: "EMP001",
      department: { departmentName: "Engineering" },
      position: { positionName: "Software Developer" },
    },
  },
]

export async function signIn(email: string, password: string): Promise<{ user: User; token: string } | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const mockUser = mockUsers.find((u) => u.email === email && u.password === password)

  if (!mockUser) {
    return null
  }

  const user: User = {
    id: mockUser.id,
    email: mockUser.email,
    role: mockUser.role,
    employee: mockUser.employee,
  }

  // Mock JWT token
  const token = `mock-jwt-token-${mockUser.id}-${Date.now()}`

  return { user, token }
}

export async function verifyToken(token: string): Promise<User | null> {
  // Extract user ID from mock token
  const parts = token.split("-")
  if (parts.length < 4 || parts[0] !== "mock") return null

  const userId = parts[3]
  const mockUser = mockUsers.find((u) => u.id === userId)

  if (!mockUser) return null

  return {
    id: mockUser.id,
    email: mockUser.email,
    role: mockUser.role,
    employee: mockUser.employee,
  }
}

export async function hashPassword(password: string): Promise<string> {
  return `hashed-${password}`
}
