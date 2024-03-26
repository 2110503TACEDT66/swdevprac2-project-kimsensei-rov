export default async function getUserProfile(token:string){

  const response = await fetch("https://backend-hotel-booking.vercel.app/api/v1/bookings", {
      method: "GET",
      headers: {
          authorization:`Bearer ${token}`,
      },
  })
  if(!response.ok){
      throw new Error("Failed to fetch user profile")
  }

  return await response.json()

}