"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Calendar,
  QrCode,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Attendance", href: "/dashboard/attendance", icon: UserCheck },
  { name: "Employees", href: "/dashboard/employees", icon: Users },
  { name: "Events", href: "/dashboard/events", icon: Calendar },
  { name: "QR Codes", href: "/dashboard/qr", icon: QrCode },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();

  return (
    <motion.div
      initial={false}
      animate={{ width: collapsed ? 70 : 220 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='relative bg-white dark:bg-gray-900 flex flex-col h-screen border-r border-gray-200 dark:border-gray-700 shadow-xl'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 h-16' />

      {/* Header */}
      <div className='relative z-10 px-6 border-b border-gray-200/50 dark:border-gray-700/50 h-16'>
        <div className='flex items-center justify-between'>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}>
              <h1 className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent h-16 py-4'>
                PU NUN ATT
              </h1>
            </motion.div>
          )}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setCollapsed(!collapsed)}
              className='ml-auto hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 mt-4'>
              {collapsed ? (
                <ChevronRight className='h-4 w-4' />
              ) : (
                <ChevronLeft className='h-4 w-4' />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='relative z-10 flex-1 p-2 space-y-2 overflow-y-auto'>
        {navigation.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "group relative flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 overflow-hidden",
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:text-gray-300 dark:hover:from-gray-800 dark:hover:to-gray-700"
                  )}>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId='activeTab'
                      className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className='relative z-10'
                    whileHover={{ rotate: isActive ? 0 : 5 }}
                    transition={{ duration: 0.2 }}>
                    <item.icon
                      className={cn(
                        "h-5 w-5 flex-shrink-0 transition-colors duration-200",
                        isActive
                          ? "text-white"
                          : "text-gray-500 group-hover:text-blue-600 dark:text-gray-400"
                      )}
                    />
                  </motion.div>

                  {/* Label */}
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={cn(
                        "relative z-10 ml-3 transition-colors duration-200",
                        isActive ? "text-white" : ""
                      )}>
                      {item.name}
                    </motion.span>
                  )}

                  {/* Hover effect */}
                  {!isActive && (
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                      initial={false}
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className='relative z-10 p-4 border-t border-gray-200/50 dark:border-gray-700/50'>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center'>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              © 2024 PU NUN ATT
            </p>
            <div className='flex items-center justify-center mt-2 gap-1'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
              <span className='text-xs text-green-600 dark:text-green-400'>
                System Online
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   LayoutDashboard,
//   Users,
//   Calendar,
//   QrCode,
//   BarChart3,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   UserCheck,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// const navigation = [
//   { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//   { name: "Attendance", href: "/dashboard/attendance", icon: UserCheck },
//   { name: "Employees", href: "/dashboard/employees", icon: Users },
//   { name: "Events", href: "/dashboard/events", icon: Calendar },
//   { name: "QR Codes", href: "/dashboard/qr", icon: QrCode },
//   { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
//   { name: "Settings", href: "/dashboard/settings", icon: Settings },
// ];

// export function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const pathname = usePathname();

//   return (
//     <motion.div
//       initial={false}
//       animate={{ width: collapsed ? 70 : 200 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className='bg-white dark:bg-gray-800 flex flex-col h-14'>
//       <div className='p-4'>
//         <div className='flex items-center justify-between'>
//           {!collapsed && (
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className='text-xl font-bold text-gray-900 dark:text-white'>
//               PU NUN ATT
//             </motion.h1>
//           )}
//           <Button
//             variant='ghost'
//             size='sm'
//             onClick={() => setCollapsed(!collapsed)}
//             className='ml-auto'>
//             {collapsed ? (
//               <ChevronRight className='h-4 w-4' />
//             ) : (
//               <ChevronLeft className='h-4 w-4' />
//             )}
//           </Button>
//         </div>
//       </div>

//       <nav className='flex-1 p-4 space-y-2'>
//         {navigation.map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link key={item.name} href={item.href}>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={cn(
//                   "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
//                   isActive
//                     ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
//                     : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//                 )}>
//                 <item.icon className='h-5 w-5 flex-shrink-0' />
//                 {!collapsed && (
//                   <motion.span
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -10 }}
//                     className='ml-3'>
//                     {item.name}
//                   </motion.span>
//                 )}
//               </motion.div>
//             </Link>
//           );
//         })}
//       </nav>
//     </motion.div>
//   );
// }
