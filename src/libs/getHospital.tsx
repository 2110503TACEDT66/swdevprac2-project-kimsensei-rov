export default async function getHospital(id:string){
    const response = await fetch(`https://backend-hotel-booking.vercel.app/api/v1/hotels/${id}`)
    if(!response.ok){
       throw new Error("Failed to fetch hospital")
    }

    return await response.json();
}