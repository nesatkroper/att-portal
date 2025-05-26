"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Calendar, Edit, Trash2, QrCode } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

interface Event {
  eventId: string
  eventName: string
  memo?: string
  startDate: Date
  endDate: Date
  status: string
  createdAt: Date
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    memo: "",
    startDate: "",
    endDate: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events")
      const data = await response.json()
      setEvents(data.events || [])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const createEvent = async () => {
    if (!newEvent.eventName || !newEvent.startDate || !newEvent.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsCreating(true)
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      })

      const data = await response.json()

      if (data.success) {
        setEvents((prev) => [data.event, ...prev])
        setNewEvent({ eventName: "", memo: "", startDate: "", endDate: "" })
        toast({
          title: "Success",
          description: "Event created successfully",
        })
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create event",
        variant: "destructive",
      })
    } finally {
      setIsCreating(false)
    }
  }

  const updateEvent = async (eventId: string, updates: Partial<Event>) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })

      const data = await response.json()

      if (data.success) {
        setEvents((prev) => prev.map((event) => (event.eventId === eventId ? data.event : event)))
        toast({
          title: "Success",
          description: "Event updated successfully",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update event",
        variant: "destructive",
      })
    }
  }

  const deleteEvent = async (eventId: string) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        setEvents((prev) => prev.filter((event) => event.eventId !== eventId))
        toast({
          title: "Success",
          description: "Event deleted successfully",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive",
      })
    }
  }

  const generateQRCode = async (eventId: string) => {
    try {
      const response = await fetch("/api/qr/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          expiresIn: 480, // 8 hours
          oneTimeUse: false,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Success",
          description: "QR code generated successfully",
        })
        // Navigate to QR codes page or show QR code
        window.open("/dashboard/qr", "_blank")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive",
      })
    }
  }

  const formatDateTime = (date: Date | string) => {
    return new Date(date).toLocaleString()
  }

  const isEventActive = (event: Event) => {
    const now = new Date()
    const start = new Date(event.startDate)
    const end = new Date(event.endDate)
    return now >= start && now <= end && event.status === "active"
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Events</h1>
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Events Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Create and manage attendance events</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
              <DialogDescription>Set up a new attendance tracking event</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="eventName">Event Name *</Label>
                <Input
                  id="eventName"
                  placeholder="Enter event name"
                  value={newEvent.eventName}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, eventName: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="memo">Description</Label>
                <Textarea
                  id="memo"
                  placeholder="Event description (optional)"
                  value={newEvent.memo}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, memo: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date & Time *</Label>
                  <Input
                    id="startDate"
                    type="datetime-local"
                    value={newEvent.startDate}
                    onChange={(e) => setNewEvent((prev) => ({ ...prev, startDate: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date & Time *</Label>
                  <Input
                    id="endDate"
                    type="datetime-local"
                    value={newEvent.endDate}
                    onChange={(e) => setNewEvent((prev) => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
              </div>

              <Button onClick={createEvent} disabled={isCreating} className="w-full">
                {isCreating ? "Creating..." : "Create Event"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.filter((e) => isEventActive(e)).length}</div>
            <p className="text-xs text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.filter((e) => new Date(e.startDate) > new Date()).length}</div>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>Manage your attendance tracking events</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.eventId}>
                  <TableCell>
                    <div className="font-medium">{event.eventName}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-500">{event.memo || "No description"}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{formatDateTime(event.startDate)}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{formatDateTime(event.endDate)}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={isEventActive(event) ? "default" : "secondary"}>
                      {isEventActive(event) ? "Active" : event.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => generateQRCode(event.eventId)}
                        disabled={event.status !== "active"}
                      >
                        <QrCode className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setEditingEvent(event)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteEvent(event.eventId)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {events.length === 0 && (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Events</h3>
              <p className="text-gray-500 mb-4">Create your first event to start tracking attendance</p>
            </div>
          )}
        </CardContent>
      </Card>
      {/* Edit Event Dialog */}
      <Dialog open={!!editingEvent} onOpenChange={(open) => !open && setEditingEvent(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>Update event information</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="editEventName">Event Name *</Label>
              <Input
                id="editEventName"
                placeholder="Enter event name"
                value={editingEvent?.eventName || ""}
                onChange={(e) => setEditingEvent((prev) => (prev ? { ...prev, eventName: e.target.value } : null))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="editMemo">Description</Label>
              <Textarea
                id="editMemo"
                placeholder="Event description (optional)"
                value={editingEvent?.memo || ""}
                onChange={(e) => setEditingEvent((prev) => (prev ? { ...prev, memo: e.target.value } : null))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="editStartDate">Start Date & Time *</Label>
                <Input
                  id="editStartDate"
                  type="datetime-local"
                  value={editingEvent ? new Date(editingEvent.startDate).toISOString().slice(0, 16) : ""}
                  onChange={(e) =>
                    setEditingEvent((prev) => (prev ? { ...prev, startDate: new Date(e.target.value) } : null))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="editEndDate">End Date & Time *</Label>
                <Input
                  id="editEndDate"
                  type="datetime-local"
                  value={editingEvent ? new Date(editingEvent.endDate).toISOString().slice(0, 16) : ""}
                  onChange={(e) =>
                    setEditingEvent((prev) => (prev ? { ...prev, endDate: new Date(e.target.value) } : null))
                  }
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setEditingEvent(null)}>
                Cancel
              </Button>
              <Button onClick={() => editingEvent && updateEvent(editingEvent.eventId, editingEvent)}>
                Update Event
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
