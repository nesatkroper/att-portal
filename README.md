# AttendanceHub - Professional Attendance Portal

A modern, professional admin portal with mobile QR code attendance tracking built with Next.js 14, TypeScript, and Prisma.

## Features

### Admin Portal
- **Modern Dashboard**: Professional interface with real-time analytics
- **User Management**: Complete CRUD operations for employees and admins
- **Attendance Reports**: Comprehensive reporting and analytics
- **QR Code Management**: Generate and manage QR codes for events
- **Real-time Monitoring**: Live attendance tracking
- **Responsive Design**: Mobile-friendly interface
- **Smooth Animations**: Framer Motion powered transitions

### Mobile Attendance System
- **QR Code Scanning**: Mobile-optimized QR code validation
- **Attendance Recording**: Automatic check-in/check-out
- **Location Verification**: Optional GPS location tracking
- **Secure Authentication**: Token-based security
- **Offline Support**: Works with intermittent connectivity

### Technical Features
- **Type Safety**: Full TypeScript implementation
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with role-based access
- **UI Components**: shadcn/ui with Tailwind CSS
- **API Documentation**: RESTful APIs with proper error handling
- **Performance**: Optimized with caching and lazy loading
- **Security**: Input validation, SQL injection protection

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, React 18
- **UI/UX**: shadcn/ui, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: NextAuth.js
- **QR Codes**: qrcode library
- **Charts**: Recharts
- **Deployment**: Vercel-ready

## Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone and install dependencies**
\`\`\`bash
git clone <repository-url>
cd attendance-portal
npm install
\`\`\`

2. **Environment Setup**
\`\`\`bash
cp .env.example .env
\`\`\`

Edit `.env` with your database and authentication settings:
\`\`\`env
DATABASE_URL="postgresql://username:password@localhost:5432/attendance_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
\`\`\`

3. **Database Setup**
\`\`\`bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Optional: Open Prisma Studio
npm run db:studio
\`\`\`

4. **Seed Database (Optional)**
Create initial admin user and sample data:
\`\`\`sql
-- Insert roles
INSERT INTO "Role" ("roleId", "roleName") VALUES 
  (gen_random_uuid(), 'admin'),
  (gen_random_uuid(), 'employee');

-- Insert departments
INSERT INTO "Department" ("departmentId", "departmentName") VALUES 
  (gen_random_uuid(), 'Human Resources'),
  (gen_random_uuid(), 'Engineering'),
  (gen_random_uuid(), 'Marketing');

-- Insert positions
INSERT INTO "Position" ("positionId", "positionName") VALUES 
  (gen_random_uuid(), 'Manager'),
  (gen_random_uuid(), 'Developer'),
  (gen_random_uuid(), 'Analyst');
\`\`\`

5. **Start Development Server**
\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to access the application.

## Project Structure

\`\`\`
attendance-portal/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── attendance/    # Attendance management
│   │   └── qr/           # QR code operations
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # Admin dashboard
│   ├── mobile/           # Mobile-optimized pages
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── dashboard/        # Dashboard-specific components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility libraries
│   ├── auth.ts          # NextAuth configuration
│   ├── prisma.ts        # Database client
│   └── utils.ts         # Helper functions
├── prisma/              # Database schema
└── public/              # Static assets
\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout

### Attendance
- `GET /api/attendance` - Fetch attendance records
- `POST /api/attendance` - Record attendance (check-in/out)

### QR Codes
- `POST /api/qr/generate` - Generate QR code for event
- `POST /api/qr/validate` - Validate scanned QR code

## Usage

### Admin Dashboard
1. **Login**: Use admin credentials to access dashboard
2. **Manage Events**: Create events for attendance tracking
3. **Generate QR Codes**: Create QR codes for specific events
4. **Monitor Attendance**: View real-time attendance data
5. **Generate Reports**: Export attendance reports

### Mobile Attendance
1. **Access Scanner**: Navigate to `/mobile/scan`
2. **Scan QR Code**: Upload or capture QR code image
3. **Automatic Recording**: Attendance recorded automatically
4. **Confirmation**: Receive confirmation of check-in/out

## Security Features

- **Authentication**: Secure session management with NextAuth.js
- **Authorization**: Role-based access control
- **Input Validation**: Zod schema validation
- **SQL Injection Protection**: Prisma ORM parameterized queries
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Rate Limiting**: API endpoint protection

## Performance Optimizations

- **Server Components**: Reduced client-side JavaScript
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Database query optimization
- **Lazy Loading**: Component-level lazy loading

## Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your Git repository to Vercel
2. **Environment Variables**: Add production environment variables
3. **Database**: Set up PostgreSQL database (Neon, Supabase, etc.)
4. **Deploy**: Automatic deployment on push

### Manual Deployment
\`\`\`bash
# Build application
npm run build

# Start production server
npm start
\`\`\`

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## Roadmap

- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Biometric integration
- [ ] Multi-language support
- [ ] Advanced reporting features
- [ ] Integration with HR systems
