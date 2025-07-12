'use client';
import DashboardPageLayout from '@/components/dashboard/dashboard-page-layout';
import Table from './table';
export default function fieldsBookingPage() {
  return (
    <DashboardPageLayout
      title="Fields Booking"
      description="Manage your field bookings here"
    >
      <div className="flex-1">
        {/* Import the bookings table component */}
        <Table />
      </div>
    </DashboardPageLayout>
  );
}
