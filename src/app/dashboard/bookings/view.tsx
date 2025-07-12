'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  CreditCard,
  Hash,
} from 'lucide-react';
import { Booking } from './columns';

interface ViewBookingProps {
  open: boolean;
  onClose: () => void;
  booking: Booking | null;
}

export default function ViewBooking({
  open,
  onClose,
  booking,
}: ViewBookingProps) {
  if (!booking) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatCreatedAt = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base">
            <Hash className="h-4 w-4" />
            Booking #{booking.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Customer & Contact */}
          <div className="grid grid-cols-2 gap-3 p-3 bg-muted/50 rounded-lg">
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <User className="h-3 w-3" />
                Customer
              </label>
              <p className="text-sm font-medium">{booking.customerName}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Mail className="h-3 w-3" />
                Email
              </label>
              <p className="text-sm font-medium truncate">
                {booking.customerEmail}
              </p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-2 gap-3 p-3 bg-muted/50 rounded-lg">
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Field
              </label>
              <p className="text-sm font-medium">Field {booking.fieldNumber}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Date
              </label>
              <p className="text-sm font-medium">{formatDate(booking.date)}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Time
              </label>
              <p className="text-sm font-medium">
                {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
              </p>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Duration
              </label>
              <p className="text-sm font-medium">{booking.duration}h</p>
            </div>
          </div>

          {/* Payment & Status */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-muted/50 rounded-lg">
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Price
              </label>
              <p className="text-lg font-bold text-green-600">
                ${booking.totalPrice}
              </p>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Payment
              </label>
              <Badge
                variant={
                  booking.paymentStatus === 'paid'
                    ? 'default'
                    : booking.paymentStatus === 'unpaid'
                    ? 'secondary'
                    : 'destructive'
                }
                className="text-xs capitalize"
              >
                {booking.paymentStatus}
              </Badge>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Status
              </label>
              <Badge
                variant={
                  booking.status === 'confirmed'
                    ? 'default'
                    : booking.status === 'pending'
                    ? 'secondary'
                    : booking.status === 'completed'
                    ? 'outline'
                    : 'destructive'
                }
                className="text-xs capitalize"
              >
                {booking.status}
              </Badge>
            </div>
          </div>

          {/* Created At */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Created: {formatCreatedAt(booking.createdAt)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
