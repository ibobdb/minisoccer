'use client';

import { DashboardLayout } from '../../components/dashboard/dashboard-layout';

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Wrap in ProtectedRoute for client-side protection in addition to middleware
  return <DashboardLayout>{children}</DashboardLayout>;
}
