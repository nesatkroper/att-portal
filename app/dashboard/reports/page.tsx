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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  FileText,
  FileSpreadsheet,
  Filter,
  Calendar,
  Loader2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  downloadCSV,
  downloadJSON,
  downloadPDF,
  downloadExcel,
} from "@/lib/export-utils";

interface ReportData {
  "Employee Code": string;
  "Employee Name": string;
  Department: string;
  Position: string;
  Event: string;
  "Check In": string;
  "Check Out": string;
  "Work Hours": string;
  Method: string;
  Note: string;
}

interface ReportSummary {
  totalRecords: number;
  totalEmployees: number;
  averageWorkHours: number;
  departmentBreakdown: { department: string; count: number }[];
}

export default function ReportsPage() {
  const [reportData, setReportData] = useState<ReportData[]>([]);
  const [summary, setSummary] = useState<ReportSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    employeeId: "",
    department: "",
  });
  const { toast } = useToast();

  const departments = ["Administration", "Engineering", "Marketing", "HR"];
  const employees = [
    { id: "emp-1", name: "John Admin" },
    { id: "emp-2", name: "Jane Smith" },
    { id: "emp-3", name: "Mike Johnson" },
    { id: "emp-4", name: "Sarah Wilson" },
    { id: "emp-5", name: "David Brown" },
  ];

  useEffect(() => {
    // Load initial data
    generateReport();
  }, []);

  const generateReport = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== "all") params.append(key, value);
      });

      const response = await fetch(`/api/reports/attendance?${params}`);
      const data = await response.json();

      if (data.success) {
        setReportData(data.data);
        setSummary(data.summary);
        toast({
          title: "Success",
          description: "Report generated successfully",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate report",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const exportReport = async (format: "csv" | "json" | "pdf" | "excel") => {
    if (reportData.length === 0) {
      toast({
        title: "Error",
        description: "No data to export. Please generate a report first.",
        variant: "destructive",
      });
      return;
    }

    setExportLoading(format);
    const filename = `attendance-report-${
      new Date().toISOString().split("T")[0]
    }`;

    try {
      let success = false;

      switch (format) {
        case "csv":
          downloadCSV(reportData, filename);
          success = true;
          break;
        case "json":
          downloadJSON(reportData, filename);
          success = true;
          break;
        case "pdf":
          success = await downloadPDF(
            reportData,
            filename,
            "Attendance Report"
          );
          break;
        case "excel":
          success = downloadExcel(reportData, filename, "Attendance Report");
          break;
      }

      if (success) {
        toast({
          title: "Export Successful",
          description: `Report exported as ${format.toUpperCase()} file`,
        });
      }
    } catch (error: any) {
      console.error(`Export error (${format}):`, error);
      toast({
        title: "Export Failed",
        description:
          error.message || `Failed to export ${format.toUpperCase()} file`,
        variant: "destructive",
      });
    } finally {
      setExportLoading(null);
    }
  };

  const clearFilters = () => {
    setFilters({
      startDate: "",
      endDate: "",
      employeeId: "",
      department: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
            Reports & Analytics
          </h1>
          <p className='text-gray-600 dark:text-gray-400'>
            Generate and export professional attendance reports
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Filter className='mr-2 h-5 w-5' />
            Report Filters
          </CardTitle>
          <CardDescription>Configure your report parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <div className='space-y-2'>
              <Label htmlFor='startDate'>Start Date</Label>
              <Input
                id='startDate'
                type='date'
                value={filters.startDate}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, startDate: e.target.value }))
                }
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='endDate'>End Date</Label>
              <Input
                id='endDate'
                type='date'
                value={filters.endDate}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, endDate: e.target.value }))
                }
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='employee'>Employee</Label>
              <Select
                value={filters.employeeId}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, employeeId: value }))
                }>
                <SelectTrigger>
                  <SelectValue placeholder='All employees' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All employees</SelectItem>
                  {employees.map((emp) => (
                    <SelectItem key={emp.id} value={emp.id}>
                      {emp.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='department'>Department</Label>
              <Select
                value={filters.department}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, department: value }))
                }>
                <SelectTrigger>
                  <SelectValue placeholder='All departments' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='flex space-x-2 mt-4'>
            <Button onClick={generateReport} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Generating...
                </>
              ) : (
                "Generate Report"
              )}
            </Button>
            <Button variant='outline' onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      {summary && (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Records
              </CardTitle>
              <FileText className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{summary.totalRecords}</div>
              <p className='text-xs text-muted-foreground'>
                Attendance entries
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Unique Employees
              </CardTitle>
              <FileText className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{summary.totalEmployees}</div>
              <p className='text-xs text-muted-foreground'>In this report</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Avg Work Hours
              </CardTitle>
              <Calendar className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {summary.averageWorkHours}h
              </div>
              <p className='text-xs text-muted-foreground'>
                Per completed session
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Top Department
              </CardTitle>
              <FileText className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {summary.departmentBreakdown[0]?.department || "N/A"}
              </div>
              <p className='text-xs text-muted-foreground'>
                {summary.departmentBreakdown[0]?.count || 0} records
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Professional Export Options */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Download className='mr-2 h-5 w-5' />
            Professional Export Options
          </CardTitle>
          <CardDescription>
            Download your report in various professional formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Button
              variant='outline'
              onClick={() => exportReport("excel")}
              disabled={reportData.length === 0 || exportLoading === "excel"}
              className='h-20 flex-col space-y-2'>
              {exportLoading === "excel" ? (
                <Loader2 className='h-6 w-6 animate-spin' />
              ) : (
                <FileSpreadsheet className='h-6 w-6 text-green-600' />
              )}
              <div className='text-center'>
                <div className='font-medium'>Excel Report</div>
                <div className='text-xs text-muted-foreground'>
                  Multi-sheet analysis
                </div>
              </div>
            </Button>

            <Button
              variant='outline'
              onClick={() => exportReport("pdf")}
              disabled={reportData.length === 0 || exportLoading === "pdf"}
              className='h-20 flex-col space-y-2'>
              {exportLoading === "pdf" ? (
                <Loader2 className='h-6 w-6 animate-spin' />
              ) : (
                <FileText className='h-6 w-6 text-red-600' />
              )}
              <div className='text-center'>
                <div className='font-medium'>PDF Report</div>
                <div className='text-xs text-muted-foreground'>
                  Professional format
                </div>
              </div>
            </Button>

            <Button
              variant='outline'
              onClick={() => exportReport("csv")}
              disabled={reportData.length === 0 || exportLoading === "csv"}
              className='h-20 flex-col space-y-2'>
              {exportLoading === "csv" ? (
                <Loader2 className='h-6 w-6 animate-spin' />
              ) : (
                <FileSpreadsheet className='h-6 w-6 text-blue-600' />
              )}
              <div className='text-center'>
                <div className='font-medium'>CSV Export</div>
                <div className='text-xs text-muted-foreground'>Data only</div>
              </div>
            </Button>

            <Button
              variant='outline'
              onClick={() => exportReport("json")}
              disabled={reportData.length === 0 || exportLoading === "json"}
              className='h-20 flex-col space-y-2'>
              {exportLoading === "json" ? (
                <Loader2 className='h-6 w-6 animate-spin' />
              ) : (
                <FileText className='h-6 w-6 text-purple-600' />
              )}
              <div className='text-center'>
                <div className='font-medium'>JSON Export</div>
                <div className='text-xs text-muted-foreground'>Raw data</div>
              </div>
            </Button>
          </div>

          {reportData.length === 0 && (
            <div className='mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
              <p className='text-sm text-yellow-800 dark:text-yellow-200'>
                💡 Generate a report first to enable export options
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Report Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Report Data Preview</CardTitle>
          <CardDescription>
            {reportData.length > 0
              ? `Showing ${Math.min(reportData.length, 10)} of ${
                  reportData.length
                } records`
              : "No data available"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {reportData.length > 0 ? (
            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                    <TableHead>Work Hours</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportData.slice(0, 10).map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <div className='font-medium'>
                            {record["Employee Name"]}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {record["Employee Code"]}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{record.Department}</TableCell>
                      <TableCell>{record.Event}</TableCell>
                      <TableCell>
                        <div className='text-sm'>{record["Check In"]}</div>
                      </TableCell>
                      <TableCell>
                        <div className='text-sm'>{record["Check Out"]}</div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            record["Work Hours"] === "Active" ||
                            record["Work Hours"] === "Still Active"
                              ? "secondary"
                              : "default"
                          }>
                          {record["Work Hours"]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline' className='capitalize'>
                          {record.Method}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {reportData.length > 10 && (
                <div className='text-center py-4 text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-b-lg'>
                  📊 Showing preview of first 10 records. Export to get complete
                  data with {reportData.length} total records.
                </div>
              )}
            </div>
          ) : (
            <div className='text-center py-12'>
              <FileText className='h-16 w-16 text-gray-400 mx-auto mb-4' />
              <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
                No Report Data
              </h3>
              <p className='text-gray-500 mb-6'>
                Generate a report to see attendance data and export options
              </p>
              <Button onClick={generateReport} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating...
                  </>
                ) : (
                  "Generate Your First Report"
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
