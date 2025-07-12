import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateBookingData {
  customerName: string;
  customerEmail: string;
  fieldNumber: number;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  totalPrice: number;
  status?: string;
  paymentStatus?: string;
}

export const bookingService = {
  async createBooking(data: CreateBookingData) {
    try {
      const booking = await prisma.booking.create({
        data: {
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          fieldNumber: data.fieldNumber,
          date: data.date,
          startTime: data.startTime,
          endTime: data.endTime,
          duration: data.duration,
          totalPrice: data.totalPrice,
          status: data.status || 'pending',
          paymentStatus: data.paymentStatus || 'unpaid',
        },
      });
      return booking;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error('Failed to create booking');
    }
  },

  async getBookings() {
    try {
      const bookings = await prisma.booking.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      return bookings;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw new Error('Failed to fetch bookings');
    }
  },

  async getBookingById(id: string) {
    try {
      const booking = await prisma.booking.findUnique({
        where: { id },
      });
      return booking;
    } catch (error) {
      console.error('Error fetching booking:', error);
      throw new Error('Failed to fetch booking');
    }
  },

  async updateBooking(id: string, data: Partial<CreateBookingData>) {
    try {
      const booking = await prisma.booking.update({
        where: { id },
        data,
      });
      return booking;
    } catch (error) {
      console.error('Error updating booking:', error);
      throw new Error('Failed to update booking');
    }
  },

  async deleteBooking(id: string) {
    try {
      await prisma.booking.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw new Error('Failed to delete booking');
    }
  },
};
