import { BookingItem } from "../../interface"

export default async function postBooking(bookingData: BookingItem, token: string) {
    const response = await fetch(`https://backend-hotel-booking.vercel.app/api/v1/hotel/${bookingData.hotel}/bookings/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
    })
    if (!response.ok) {
        throw new Error("Failed to post booking")
    }

    return await response.json()

}