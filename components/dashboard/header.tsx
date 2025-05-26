"use client";

import { useState, useEffect } from "react";
import { Bell, Search, Moon, Sun, LogOut, Zap, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth-provider";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  user: {
    id: string;
    email: string;
    role: string;
    employee?: any;
  };
}

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export function Header({ user }: HeaderProps) {
  const router = useRouter();
  const mobile = useIsMobile();
  const { signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/notifications");
      const data = await response.json();
      setNotifications(data.notifications || []);
      setUnreadCount(data.unreadCount || 0);
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      await fetch("/api/notifications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notificationId, read: true }),
      });

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === notificationId ? { ...notif, read: true } : notif
        )
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth/signin");
  };

  const formatNotificationTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
    return `${Math.floor(minutes / 1440)}d ago`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className='sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-6 py-3 h-16 border-b border-gray-200/50 dark:border-gray-700/50'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/50 to-purple-50/30 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50' />

      <div className='relative z-10 flex items-center justify-between h-full'>
        {/* Left Section */}
        <div className='flex items-center space-x-6'>
          {/* Live Stats */}
          {mobile ? (
            ""
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className='hidden md:flex items-center gap-4'>
              <div className='flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full border border-green-200 dark:border-green-800'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='text-sm font-medium text-green-700 dark:text-green-300'>
                  142 Present
                </span>
              </div>
              <div className='flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full border border-blue-200 dark:border-blue-800'>
                <TrendingUp className='w-3 h-3 text-blue-600' />
                <span className='text-sm font-medium text-blue-700 dark:text-blue-300'>
                  94% Rate
                </span>
              </div>
            </motion.div>
          )}

          {/* Enhanced Search */}
          <motion.div
            className='relative'
            animate={{ width: searchFocused ? 180 : 200 }}
            transition={{ duration: 0.2 }}>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            <Input
              placeholder='Search...'
              className='pl-10 bg-white/60 dark:bg-gray-800/60 border-gray-200/50 dark:border-gray-700/50 focus:bg-white dark:focus:bg-gray-800 focus:border-blue-300 dark:focus:border-blue-600 transition-all duration-200 shadow-sm'
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <AnimatePresence>
              {searchFocused && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className='absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-3'>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Start typing to search...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-3'>
          {/* Theme Toggle */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 rounded-xl'>
              <AnimatePresence mode='wait'>
                {theme === "dark" ? (
                  <motion.div
                    key='sun'
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Sun className='h-4 w-4 text-yellow-500' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='moon'
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Moon className='h-4 w-4 text-blue-600' />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  variant='ghost'
                  size='sm'
                  className='relative hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 rounded-xl'>
                  <Bell className='h-4 w-4' />
                  {unreadCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='absolute -top-1 -right-1'>
                      <Badge
                        variant='destructive'
                        className='h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500 animate-pulse shadow-lg'>
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </Badge>
                    </motion.div>
                  )}
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-80 rounded-xl shadow-xl'
              align='end'>
              <DropdownMenuLabel className='flex items-center justify-between'>
                <span className='font-semibold'>Notifications</span>
                {unreadCount > 0 && (
                  <Badge variant='secondary' className='text-xs'>
                    {unreadCount} new
                  </Badge>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.length > 0 ? (
                <div className='max-h-96 overflow-y-auto'>
                  {notifications.slice(0, 5).map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}>
                      <DropdownMenuItem
                        className={`flex flex-col items-start p-4 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 ${
                          !notification.read
                            ? "bg-blue-50/50 dark:bg-blue-900/20 border-l-2 border-blue-500"
                            : ""
                        }`}
                        onClick={() => markAsRead(notification.id)}>
                        <div className='flex items-center justify-between w-full'>
                          <span className='font-medium text-sm'>
                            {notification.title}
                          </span>
                          <span className='text-xs text-gray-500'>
                            {formatNotificationTime(notification.timestamp)}
                          </span>
                        </div>
                        <span className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                          {notification.message}
                        </span>
                        {!notification.read && (
                          <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse' />
                        )}
                      </DropdownMenuItem>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <DropdownMenuItem disabled className='text-center py-8'>
                  <div className='text-gray-500'>No notifications</div>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  variant='ghost'
                  className='relative h-10 w-10 rounded-full p-0'>
                  <Avatar className='h-10 w-10 border-2 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg'>
                    <AvatarImage src='/placeholder-user.jpg' alt='User' />
                    <AvatarFallback className='bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold'>
                      {user?.employee
                        ? getInitials(
                            `${user.employee.firstName} ${user.employee.lastName}`
                          )
                        : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full animate-pulse' />
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-64 rounded-xl shadow-xl'
              align='end'
              forceMount>
              <DropdownMenuLabel className='font-normal'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex items-center gap-3'>
                    <Avatar className='h-12 w-12'>
                      <AvatarImage src='/placeholder-user.jpg' alt='User' />
                      <AvatarFallback className='bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                        {user?.employee
                          ? getInitials(
                              `${user.employee.firstName} ${user.employee.lastName}`
                            )
                          : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm font-medium leading-none'>
                        {user?.employee
                          ? `${user.employee.firstName} ${user.employee.lastName}`
                          : "User"}
                      </p>
                      <p className='text-xs leading-none text-muted-foreground mt-1'>
                        {user?.email}
                      </p>
                      <Badge variant='secondary' className='mt-2 text-xs'>
                        <Zap className='w-3 h-3 mr-1' />
                        {user?.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200'>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200'>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className='text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200'>
                <LogOut className='mr-2 h-4 w-4' />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { Bell, Search, Moon, Sun, LogOut } from "lucide-react";
// import { useTheme } from "next-themes";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { useAuth } from "@/components/auth-provider";

// interface HeaderProps {
//   user: {
//     id: string;
//     email: string;
//     role: string;
//     employee?: any;
//   };
// }

// interface Notification {
//   id: string;
//   type: string;
//   title: string;
//   message: string;
//   timestamp: Date;
//   read: boolean;
// }

// export function Header({ user }: HeaderProps) {
//   const { theme, setTheme } = useTheme();
//   const { signOut } = useAuth();
//   const router = useRouter();
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [unreadCount, setUnreadCount] = useState(0);

//   useEffect(() => {
//     fetchNotifications();
//     // Poll for new notifications every 30 seconds
//     const interval = setInterval(fetchNotifications, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const response = await fetch("/api/notifications");
//       const data = await response.json();
//       setNotifications(data.notifications || []);
//       setUnreadCount(data.unreadCount || 0);
//     } catch (error) {
//       console.error("Failed to fetch notifications:", error);
//     }
//   };

//   const markAsRead = async (notificationId: string) => {
//     try {
//       await fetch("/api/notifications", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ notificationId, read: true }),
//       });

//       setNotifications((prev) =>
//         prev.map((notif) =>
//           notif.id === notificationId ? { ...notif, read: true } : notif
//         )
//       );
//       setUnreadCount((prev) => Math.max(0, prev - 1));
//     } catch (error) {
//       console.error("Failed to mark notification as read:", error);
//     }
//   };

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();
//   };

//   const handleSignOut = async () => {
//     await signOut();
//     router.push("/auth/signin");
//   };

//   const formatNotificationTime = (timestamp: Date) => {
//     const now = new Date();
//     const diff = now.getTime() - new Date(timestamp).getTime();
//     const minutes = Math.floor(diff / 60000);

//     if (minutes < 1) return "Just now";
//     if (minutes < 60) return `${minutes}m ago`;
//     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
//     return `${Math.floor(minutes / 1440)}d ago`;
//   };

//   return (
//     <header className='bg-white dark:bg-gray-800 px-6 py-2 h-14'>
//       <div className='flex items-center justify-between'>
//         <div className='flex items-center space-x-4'>
//           <div className='relative'>
//             <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
//             <Input placeholder='Search...' className='pl-10 w-64' />
//           </div>
//         </div>

//         <div className='flex items-center space-x-4'>
//           <Button
//             variant='ghost'
//             size='sm'
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//             {theme === "dark" ? (
//               <Sun className='h-4 w-4' />
//             ) : (
//               <Moon className='h-4 w-4' />
//             )}
//           </Button>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant='ghost' size='sm' className='relative'>
//                 <Bell className='h-4 w-4' />
//                 {unreadCount > 0 && (
//                   <Badge
//                     variant='destructive'
//                     className='absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs'>
//                     {unreadCount > 9 ? "9+" : unreadCount}
//                   </Badge>
//                 )}
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className='w-80' align='end'>
//               <DropdownMenuLabel>Notifications</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               {notifications.length > 0 ? (
//                 <div className='max-h-96 overflow-y-auto'>
//                   {notifications.slice(0, 5).map((notification) => (
//                     <DropdownMenuItem
//                       key={notification.id}
//                       className={`flex flex-col items-start p-3 cursor-pointer ${
//                         !notification.read
//                           ? "bg-blue-50 dark:bg-blue-900/20"
//                           : ""
//                       }`}
//                       onClick={() => markAsRead(notification.id)}>
//                       <div className='flex items-center justify-between w-full'>
//                         <span className='font-medium text-sm'>
//                           {notification.title}
//                         </span>
//                         <span className='text-xs text-gray-500'>
//                           {formatNotificationTime(notification.timestamp)}
//                         </span>
//                       </div>
//                       <span className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
//                         {notification.message}
//                       </span>
//                       {!notification.read && (
//                         <div className='w-2 h-2 bg-blue-500 rounded-full mt-1'></div>
//                       )}
//                     </DropdownMenuItem>
//                   ))}
//                   {notifications.length > 5 && (
//                     <DropdownMenuItem className='text-center text-sm text-gray-500'>
//                       View all notifications
//                     </DropdownMenuItem>
//                   )}
//                 </div>
//               ) : (
//                 <DropdownMenuItem disabled>No notifications</DropdownMenuItem>
//               )}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
//                 <Avatar className='h-8 w-8'>
//                   <AvatarImage src='/placeholder-user.jpg' alt='User' />
//                   <AvatarFallback>
//                     {user?.employee
//                       ? getInitials(
//                           `${user.employee.firstName} ${user.employee.lastName}`
//                         )
//                       : "U"}
//                   </AvatarFallback>
//                 </Avatar>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className='w-56' align='end' forceMount>
//               <DropdownMenuLabel className='font-normal'>
//                 <div className='flex flex-col space-y-1'>
//                   <p className='text-sm font-medium leading-none'>
//                     {user?.employee
//                       ? `${user.employee.firstName} ${user.employee.lastName}`
//                       : "User"}
//                   </p>
//                   <p className='text-xs leading-none text-muted-foreground'>
//                     {user?.email}
//                   </p>
//                 </div>
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={handleSignOut}>
//                 <LogOut className='mr-2 h-4 w-4' />
//                 Log out
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   );
// }
