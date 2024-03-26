export default async function getBooking(token:string){

  const response = await fetch("https://backend-hotel-booking.vercel.app/api/v1/bookings", {
      method: "GET",
      headers: {
          authorization:`Bearer ${token}`,
      },
  })
  if(!response.ok){
      throw new Error("Failed to fetch get booking")
  }

  return await response.json()

}