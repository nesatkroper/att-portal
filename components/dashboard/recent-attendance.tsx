import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Attendance {
  attendanceId: string
  checkIn: Date
  checkOut: Date | null
  employee: {
    firstName: string
    lastName: string
    employeeCode: string | null
  }
  event: {
    eventName: string
  }
}

interface RecentAttendanceProps {
  attendances: Attendance[]
}

export function RecentAttendance({ attendances }: RecentAttendanceProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-4">
      {attendances.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">No recent attendance records</p>
      ) : (
        attendances.map((attendance) => (
          <div key={attendance.attendanceId} className="flex items-center space-x-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder-user.jpg" alt="Employee" />
              <AvatarFallback>
                {getInitials(attendance.employee.firstName, attendance.employee.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {attendance.employee.firstName} {attendance.employee.lastName}
              </p>
              <p className="text-sm text-muted-foreground">{attendance.event.eventName}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{formatTime(attendance.checkIn)}</p>
              <Badge variant={attendance.checkOut ? "default" : "secondary"}>
                {attendance.checkOut ? "Completed" : "Active"}
              </Badge>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
