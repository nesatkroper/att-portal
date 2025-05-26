"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Download, UserCheck, Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Attendance {
  attendanceId: string
  checkIn: Date
  checkOut: Date | null
  employee: {
    firstName: string
    lastName: string
    employeeCode: string
    department: { departmentName: string }
    position: { positionName: string }
  }
  event: {
    eventName: string
  }
  method: string
  status: string
}

export default function AttendancePage() {
  const [attendances, setAttendances] = useState<Attendance[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchAttendances()
  }, [])

  const fetchAttendances = async () => {
    try {
      const response = await fetch("/api/attendance")
      const data = await response.json()
      setAttendances(data.attendances || [])
    } catch (error) {
      console.error("Failed to fetch attendances:", error)
    } finally {
      setLoading(false)
    }
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }

  const formatTime = (date: Date | string) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const calculateWorkHours = (checkIn: Date, checkOut: Date | null) => {
    if (!checkOut) return "Active"
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  const filteredAttendances = attendances.filter(
    (attendance) =>
      attendance.employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendance.employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendance.employee.employeeCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendance.event.eventName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Attendance Records</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendance Records</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage employee attendance</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2h</div>
            <p className="text-xs text-muted-foreground">Per employee today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Employees today</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Attendance Records</CardTitle>
              <CardDescription>Complete list of employee check-ins and check-outs</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAttendances.map((attendance) => (
                <TableRow key={attendance.attendanceId}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" alt="Employee" />
                        <AvatarFallback>
                          {getInitials(attendance.employee.firstName, attendance.employee.lastName)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {attendance.employee.firstName} {attendance.employee.lastName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {attendance.employee.employeeCode} • {attendance.employee.department.departmentName}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{attendance.event.eventName}</div>
                  </TableCell>
                  <TableCell>
                    <div>{formatTime(attendance.checkIn)}</div>
                    <div className="text-sm text-gray-500">{formatDate(attendance.checkIn)}</div>
                  </TableCell>
                  <TableCell>
                    {attendance.checkOut ? (
                      <div>
                        <div>{formatTime(attendance.checkOut)}</div>
                        <div className="text-sm text-gray-500">{formatDate(attendance.checkOut)}</div>
                      </div>
                    ) : (
                      <span className="text-gray-400">Still active</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={attendance.checkOut ? "default" : "secondary"}>
                      {calculateWorkHours(attendance.checkIn, attendance.checkOut)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {attendance.method}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={attendance.checkOut ? "default" : "secondary"}>
                      {attendance.checkOut ? "Completed" : "Active"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredAttendances.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No attendance records found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
