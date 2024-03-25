export default async function deleteAppointment(bookingId:string,token:string) {
    const response = await fetch(`https://backend-hotel-booking.vercel.app/api/v1/bookings/${bookingId}`,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if(!response.ok) {
        throw new Error("Failed to fetch dentists")
    }
    const data = await response.json();

    return data;
}