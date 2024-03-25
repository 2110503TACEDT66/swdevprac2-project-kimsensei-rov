export default async function getHospitals() {

    await new Promise ( (resolve)=>setTimeout(resolve, 1000) )

     const response = await fetch("https://backend-hotel-booking.vercel.app/api/v1/hotels")
     if(!response.ok){
        throw new Error("Failed to fetch hospitals")
     }
     

     return await response.json();
}