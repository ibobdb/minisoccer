'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface CreateBookingProps {
  open: boolean;
  onClose: () => void;
}

interface BookingFormData {
  customerName: string;
  customerEmail: string;
  fieldNumber: number;
  date: string;
  startTime: string;
  endTime: string;
}

export default function CreateBooking({ open, onClose }: CreateBookingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    customerEmail: '',
    fieldNumber: 1,
    date: '',
    startTime: '',
    endTime: '',
  });

  const handleInputChange = (
    field: keyof BookingFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreate = async () => {
    setIsLoading(true);

    try {
      // Calculate duration in hours
      const startHour = parseInt(formData.startTime.split(':')[0]);
      const startMinute = parseInt(formData.startTime.split(':')[1]);
      const endHour = parseInt(formData.endTime.split(':')[0]);
      const endMinute = parseInt(formData.endTime.split(':')[1]);

      const startTotal = startHour + startMinute / 60;
      const endTotal = endHour + endMinute / 60;
      const duration = endTotal - startTotal;

      // Calculate total price (assuming $40 per hour)
      const totalPrice = duration * 40;

      const bookingData = {
        ...formData,
        duration,
        totalPrice,
        status: 'pending' as const,
        paymentStatus: 'unpaid' as const,
        createdAt: new Date().toISOString(),
      };

      console.log('Creating new booking:', bookingData);

      // Here you would typically send the data to your API
      // await createBooking(bookingData);

      // Reset form
      setFormData({
        customerName: '',
        customerEmail: '',
        fieldNumber: 1,
        date: '',
        startTime: '',
        endTime: '',
      });

      onClose();
    } catch (error) {
      console.error('Error creating booking:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    formData.customerName &&
    formData.customerEmail &&
    formData.date &&
    formData.startTime &&
    formData.endTime;

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Booking</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new field booking.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="customerName">Customer Name</Label>
            <Input
              id="customerName"
              value={formData.customerName}
              onChange={(e) =>
                handleInputChange('customerName', e.target.value)
              }
              placeholder="Enter customer name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customerEmail">Email</Label>
            <Input
              id="customerEmail"
              type="email"
              value={formData.customerEmail}
              onChange={(e) =>
                handleInputChange('customerEmail', e.target.value)
              }
              placeholder="customer@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fieldNumber">Field Number</Label>
            <Input
              id="fieldNumber"
              type="number"
              min="1"
              max="10"
              value={formData.fieldNumber}
              onChange={(e) =>
                handleInputChange('fieldNumber', parseInt(e.target.value))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                value={formData.startTime}
                onChange={(e) => handleInputChange('startTime', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="time"
                value={formData.endTime}
                onChange={(e) => handleInputChange('endTime', e.target.value)}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={!isFormValid || isLoading}>
            {isLoading ? 'Creating...' : 'Create Booking'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
