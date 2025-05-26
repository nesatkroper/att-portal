"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ChartData {
  date: string
  attendance: number
}

export function AttendanceChart() {
  const [data, setData] = useState<ChartData[]>([])

  useEffect(() => {
    // Generate sample data for the past 7 days
    const generateData = () => {
      const days = []
      for (let i = 6; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        days.push({
          date: date.toLocaleDateString("en-US", { weekday: "short" }),
          attendance: Math.floor(Math.random() * 50) + 20,
        })
      }
      return days
    }

    setData(generateData())
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="attendance"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
