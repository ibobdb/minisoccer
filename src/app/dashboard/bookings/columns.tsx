'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Eye, Edit } from 'lucide-react';

// This type is used to define the shape of our booking data.
export type Booking = {
  id: string;
  customerName: string;
  customerEmail: string;
  fieldNumber: number;
  date: string;
  startTime: string;
  endTime: string;
  duration: number; // in hours
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  createdAt: string;
};

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: 'id',
    header: 'Booking ID',
    enableSorting: true,
    cell: ({ row }) => (
      <div className="font-mono text-sm font-medium">#{row.getValue('id')}</div>
    ),
  },
  {
    accessorKey: 'customerName',
    header: 'Customer',
    enableSorting: true,
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.getValue('customerName')}</div>
        <div className="text-sm text-muted-foreground">
          {row.original.customerEmail}
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'fieldNumber',
    header: 'Field',
    enableSorting: true,
    cell: ({ row }) => (
      <div className="font-medium">Field {row.getValue('fieldNumber')}</div>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    enableSorting: true,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('date')}</div>
    ),
  },
  {
    accessorKey: 'startTime',
    header: 'Time',
    enableSorting: true,
    cell: ({ row }) => (
      <div>
        {row.getValue('startTime')} - {row.original.endTime}
        <div className="text-sm text-muted-foreground">
          {row.original.duration}h duration
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'totalPrice',
    header: 'Price',
    enableSorting: true,
    cell: ({ row }) => (
      <div className="font-medium">${row.getValue('totalPrice')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableSorting: true,
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge
          variant={
            status === 'confirmed'
              ? 'default'
              : status === 'pending'
              ? 'secondary'
              : status === 'completed'
              ? 'outline'
              : 'destructive'
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment',
    enableSorting: true,
    cell: ({ row }) => {
      const paymentStatus = row.getValue('paymentStatus') as string;
      return (
        <Badge
          variant={
            paymentStatus === 'paid'
              ? 'default'
              : paymentStatus === 'unpaid'
              ? 'secondary'
              : 'destructive'
          }
        >
          {paymentStatus}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    enableSorting: false,
    cell: ({ row, table }) => {
      const onView = (table.options.meta as any)?.onView;
      const onEdit = (table.options.meta as any)?.onEdit;

      return (
        <TooltipProvider>
          <div className="flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => onView?.(row.original)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View booking details</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => onEdit?.(row.original)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit booking</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      );
    },
  },
];
