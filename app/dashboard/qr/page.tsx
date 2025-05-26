"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { QrCode, Download, Eye, Trash2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { downloadQRCode } from "@/lib/qr-generator";

interface QRCodeData {
  id: string;
  eventId: string;
  eventName: string;
  qrCode: string;
  expiresAt: string;
  isActive: boolean;
  scans: number;
  createdAt: string;
  token: string;
  oneTimeUse: boolean;
}

interface Event {
  eventId: string;
  eventName: string;
  status: string;
}

export default function QRCodePage() {
  const [qrCodes, setQrCodes] = useState<QRCodeData[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [newQR, setNewQR] = useState({
    eventId: "",
    expiresIn: "60",
    oneTimeUse: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchQRCodes();
    fetchEvents();
  }, []);

  const fetchQRCodes = async () => {
    try {
      const response = await fetch("/api/qr/generate");
      const data = await response.json();
      setQrCodes(data.qrCodes || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch QR codes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events?status=active");
      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const generateQRCode = async () => {
    if (!newQR.eventId) {
      toast({
        title: "Error",
        description: "Please select an event",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch("/api/qr/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: newQR.eventId,
          expiresIn: Number.parseInt(newQR.expiresIn),
          oneTimeUse: newQR.oneTimeUse,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || errorData.message || "Failed to generate QR code"
        );
      }

      const data = await response.json();

      setQrCodes((prev) => [data.qrCode, ...prev]);
      setNewQR({ eventId: "", expiresIn: "60", oneTimeUse: false });
      toast({
        title: "Success",
        description: "QR code generated successfully",
      });
    } catch (error) {
      console.error("Generation error:", error);
      toast({
        title: "Error",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // const generateQRCode = async () => {
  //   if (!newQR.eventId) {
  //     toast({
  //       title: "Error",
  //       description: "Please select an event",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   setIsGenerating(true);
  //   try {
  //     const response = await fetch("/api/qr/generate", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         eventId: newQR.eventId,
  //         expiresIn: Number.parseInt(newQR.expiresIn),
  //         oneTimeUse: newQR.oneTimeUse,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setQrCodes((prev) => [data.qrCode, ...prev]);
  //       setNewQR({ eventId: "", expiresIn: "60", oneTimeUse: false });
  //       toast({
  //         title: "Success",
  //         description: "QR code generated successfully",
  //       });
  //     } else {
  //       throw new Error(data.error);
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Failed to generate QR code",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsGenerating(false);
  //   }
  // };

  const handleDownload = (qrCode: QRCodeData) => {
    downloadQRCode(qrCode.qrCode, `qr-${qrCode.eventName}-${qrCode.id}`);
    toast({
      title: "Success",
      description: "QR code downloaded successfully",
    });
  };

  const deleteQRCode = (id: string) => {
    setQrCodes((prev) => prev.filter((qr) => qr.id !== id));
    toast({
      title: "Success",
      description: "QR code deleted successfully",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const isExpired = (expiresAt: string) => {
    return new Date(expiresAt) < new Date();
  };

  if (loading) {
    return (
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>QR Code Management</h1>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className='p-6'>
                <div className='animate-pulse'>
                  <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
                  <div className='h-32 bg-gray-200 rounded mb-4'></div>
                  <div className='h-8 bg-gray-200 rounded w-1/2'></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
            QR Code Management
          </h1>
          <p className='text-gray-600 text-sm dark:text-gray-400'>
            Generate and manage QR codes for attendance tracking
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className='mr-2 h-4 w-4' />
              Generate QR Code
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate New QR Code</DialogTitle>
              <DialogDescription>
                Create a QR code for an attendance event
              </DialogDescription>
            </DialogHeader>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='eventId'>Select Event *</Label>
                <Select
                  value={newQR.eventId}
                  onValueChange={(value) =>
                    setNewQR((prev) => ({ ...prev, eventId: value }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder='Choose an event' />
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event.eventId} value={event.eventId}>
                        {event.eventName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='expiresIn'>Expires In (minutes)</Label>
                <Select
                  value={newQR.expiresIn}
                  onValueChange={(value) =>
                    setNewQR((prev) => ({ ...prev, expiresIn: value }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder='Select expiration time' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='30'>30 minutes</SelectItem>
                    <SelectItem value='60'>1 hour</SelectItem>
                    <SelectItem value='120'>2 hours</SelectItem>
                    <SelectItem value='240'>4 hours</SelectItem>
                    <SelectItem value='480'>8 hours</SelectItem>
                    <SelectItem value='1440'>24 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={generateQRCode}
                disabled={!newQR.eventId || isGenerating}
                className='w-full'>
                {isGenerating ? "Generating..." : "Generate QR Code"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active QR Codes
            </CardTitle>
            <QrCode className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {
                qrCodes.filter((qr) => qr.isActive && !isExpired(qr.expiresAt))
                  .length
              }
            </div>
            <p className='text-xs text-muted-foreground'>Currently valid</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Scans</CardTitle>
            <Eye className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {qrCodes.reduce((sum, qr) => sum + qr.scans, 0)}
            </div>
            <p className='text-xs text-muted-foreground'>All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Expired Codes</CardTitle>
            <Trash2 className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {qrCodes.filter((qr) => isExpired(qr.expiresAt)).length}
            </div>
            <p className='text-xs text-muted-foreground'>Need cleanup</p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {qrCodes.map((qrCode) => (
          <Card key={qrCode.id} className='relative'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-lg'>{qrCode.eventName}</CardTitle>
                <Badge
                  variant={
                    isExpired(qrCode.expiresAt) ? "destructive" : "default"
                  }>
                  {isExpired(qrCode.expiresAt) ? "Expired" : "Active"}
                </Badge>
              </div>
              <CardDescription>
                Created: {formatTime(qrCode.createdAt)}
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-center'>
                <div className='w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden'>
                  {qrCode.qrCode ? (
                    <img
                      src={qrCode.qrCode || "/placeholder.svg"}
                      alt='QR Code'
                      className='w-full h-full object-contain'
                    />
                  ) : (
                    <QrCode className='h-16 w-16 text-gray-400' />
                  )}
                </div>
              </div>

              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Expires:</span>
                  <span
                    className={
                      isExpired(qrCode.expiresAt)
                        ? "text-red-500"
                        : "text-green-500"
                    }>
                    {formatTime(qrCode.expiresAt)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Scans:</span>
                  <span className='font-medium'>{qrCode.scans}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Type:</span>
                  <span className='font-medium'>
                    {qrCode.oneTimeUse ? "One-time" : "Multi-use"}
                  </span>
                </div>
              </div>

              <div className='flex space-x-2'>
                <Button
                  variant='outline'
                  size='sm'
                  className='flex-1'
                  onClick={() => handleDownload(qrCode)}>
                  <Download className='mr-2 h-4 w-4' />
                  Download
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => deleteQRCode(qrCode.id)}
                  className='text-red-500 hover:text-red-700'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {qrCodes.length === 0 && (
        <Card>
          <CardContent className='flex flex-col items-center justify-center py-12'>
            <QrCode className='h-12 w-12 text-gray-400 mb-4' />
            <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
              No QR Codes
            </h3>
            <p className='text-gray-500 text-center mb-4'>
              Generate your first QR code to start tracking attendance
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className='mr-2 h-4 w-4' />
                  Generate QR Code
                </Button>
              </DialogTrigger>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
