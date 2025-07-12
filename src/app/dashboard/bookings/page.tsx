'use client';
import DashboardPageLayout from '@/components/dashboard/dashboard-page-layout';
import { Button } from '@/components/ui/button';
import { Plus, Download, RefreshCcw } from 'lucide-react';
import Table from './table';
export default function fieldsBookingPage() {
  const handleAddBooking = () => {
    /* handle add booking */
  };

  const handleExport = () => {
    /* handle export */
  };

  const handleRefresh = () => {
    /* handle refresh */
  };

  const actions = (
    <div className="flex gap-2">
      <Button onClick={handleAddBooking}>
        <Plus size={16} className="mr-2" />
        Add Booking
      </Button>
    </div>
  );
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
