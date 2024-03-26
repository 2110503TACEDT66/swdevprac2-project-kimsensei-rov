"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import updateBooking from "@/libs/updateBooking"
import { getServerSession } from "next-auth";
import { BookingItem } from "../../interface";
export default async function BookingUpdate(bookingBegin: Date, bookingEnd: Date, roomtype: string, hotel: string, id: string) {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null;
    const bookingData:BookingItem = {
        bookingBegin: bookingBegin,
        bookingEnd: bookingEnd,
        roomType: roomtype,
        user: session.user._id,
        hotel: hotel,
    }
    updateBooking(bookingData, id, session.user.token)
}   