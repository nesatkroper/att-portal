import { getCurrentUser } from "@/lib/get-current-user"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, UserCheck, TrendingUp } from "lucide-react"
import { AttendanceChart } from "@/components/dashboard/attendance-chart"
import { RecentAttendance } from "@/components/dashboard/recent-attendance"

// Mock dashboard stats
const mockStats = {
  totalEmployees: 45,
  activeEvents: 3,
  todayAttendance: 38,
  recentAttendance: [
    {
      attendanceId: "att-1",
      checkIn: new Date("2024-01-15T09:00:00"),
      checkOut: new Date("2024-01-15T17:30:00"),
      employee: {
        firstName: "John",
        lastName: "Doe",
        employeeCode: "EMP001",
      },
      event: {
        eventName: "Daily Work Session",
      },
    },
    {
      attendanceId: "att-2",
      checkIn: new Date("2024-01-15T09:15:00"),
      checkOut: null,
      employee: {
        firstName: "Jane",
        lastName: "Smith",
        employeeCode: "EMP002",
      },
      event: {
        eventName: "Team Meeting",
      },
    },
    {
      attendanceId: "att-3",
      checkIn: new Date("2024-01-15T08:45:00"),
      checkOut: new Date("2024-01-15T16:45:00"),
      employee: {
        firstName: "Mike",
        lastName: "Johnson",
        employeeCode: "EMP003",
      },
      event: {
        eventName: "Project Review",
      },
    },
    {
      attendanceId: "att-4",
      checkIn: new Date("2024-01-15T09:30:00"),
      checkOut: null,
      employee: {
        firstName: "Sarah",
        lastName: "Wilson",
        employeeCode: "EMP004",
      },
      event: {
        eventName: "Training Session",
      },
    },
    {
      attendanceId: "att-5",
      checkIn: new Date("2024-01-15T08:30:00"),
      checkOut: new Date("2024-01-15T17:00:00"),
      employee: {
        firstName: "David",
        lastName: "Brown",
        employeeCode: "EMP005",
      },
      event: {
        eventName: "Client Presentation",
      },
    },
  ],
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.employee?.firstName || "Admin"}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your attendance system today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">Active employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.activeEvents}</div>
            <p className="text-xs text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.todayAttendance}</div>
            <p className="text-xs text-muted-foreground">Check-ins today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((mockStats.todayAttendance / mockStats.totalEmployees) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Of total employees</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Daily attendance for the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <AttendanceChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest attendance records</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentAttendance attendances={mockStats.recentAttendance} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
