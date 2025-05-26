"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Camera, CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function MobileScanPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)
  const [error, setError] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsProcessing(true)
    setError("")

    try {
      // Simulate QR code processing
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful scan result
      const mockResult = {
        success: true,
        event: {
          eventId: "evt-1",
          eventName: "Daily Work Session",
        },
        employee: {
          employeeId: "emp-1",
          firstName: "John",
          lastName: "Doe",
          employeeCode: "EMP001",
          department: "Engineering",
          position: "Developer",
        },
        attendance: {
          type: Math.random() > 0.5 ? "checkin" : "checkout",
          attendance: {
            attendanceId: "att-" + Date.now(),
            checkIn: new Date(),
            checkOut: Math.random() > 0.5 ? new Date() : null,
          },
        },
      }

      setScanResult(mockResult)
    } catch (error) {
      setError("Failed to process QR code")
    } finally {
      setIsProcessing(false)
    }
  }

  const resetScan = () => {
    setScanResult(null)
    setError("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">QR Code Scanner</h1>
          <p className="text-gray-600 dark:text-gray-400">Scan QR code to record attendance</p>
        </motion.div>

        {error && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {scanResult ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Scan Successful</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Event</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{scanResult.event.eventName}</p>
                </div>

                <div>
                  <h3 className="font-medium">Employee</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {scanResult.employee.firstName} {scanResult.employee.lastName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {scanResult.employee.department} • {scanResult.employee.position}
                  </p>
                </div>

                {scanResult.attendance && (
                  <div>
                    <h3 className="font-medium">Attendance</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant={scanResult.attendance.type === "checkin" ? "default" : "secondary"}>
                        {scanResult.attendance.type === "checkin" ? "Checked In" : "Checked Out"}
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date().toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Button onClick={resetScan} className="w-full">
              Scan Another QR Code
            </Button>
          </motion.div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Scan QR Code</CardTitle>
              <CardDescription>Upload an image containing a QR code to record attendance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Click to upload QR code image</p>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                <Button onClick={() => fileInputRef.current?.click()} disabled={isProcessing} className="w-full">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Camera className="mr-2 h-4 w-4" />
                      Upload QR Code
                    </>
                  )}
                </Button>
              </div>

              <div className="text-xs text-gray-500 text-center">
                Make sure the QR code is clearly visible and well-lit
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
