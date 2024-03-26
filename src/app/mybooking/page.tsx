// // In your shops component:
// import getUserProfile from "@/libs/getUserProfile";
// import getBookings from "@/libs/getBooking";
// import BookingCatalog from "@/components/BookingCatalog";
// import { BookingJson } from "../../../interface";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export default async function Bookings() {
//   const session = await getServerSession(authOptions)
//     if(!session || !session.user.token) return null

//     const profile = await getUserProfile(session.user.token)
//     var tokenn = (profile.data.token);
//   const books: BookingJson = await getBookings(tokenn); // Await the result of getBookings

//   return (
//     <main className="p-5 text-center">
//       <div className="bg-white h-[5px] mt-[20px] mb-[20px] w-[80%] sm:w-[60%] md:w-[50%] m-auto rounded-xl"></div>
//       <BookingCatalog BookingJson={books} />
//     </main>
//   );
// }
