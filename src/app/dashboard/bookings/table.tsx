import { DataTable } from '@/components/datatable';
import { Booking, columns } from './columns';
import { bookingsData } from './data';
import CreateBooking from './create';
import ViewBooking from './view';
import { useState } from 'react';

export default function Table() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const handleView = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsViewOpen(true);
  };

  const handleEdit = (booking: Booking) => {
    // TODO: Implement edit functionality
    console.log('Edit booking:', booking);
  };

  return (
    <>
      <DataTable
        data={bookingsData as Booking[]}
        columns={columns}
        onRefresh={() => {}}
        refreshable={true}
        creatable={true}
        onCreate={() => {
          setIsCreateOpen(!isCreateOpen);
        }}
        onView={handleView}
        onEdit={handleEdit}
      />
      <CreateBooking
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
      <ViewBooking
        open={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        booking={selectedBooking}
      />
    </>
  );
}
