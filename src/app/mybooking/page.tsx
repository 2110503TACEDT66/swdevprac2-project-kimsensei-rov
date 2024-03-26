import getBookings from "@/libs/getBooking";
import BookingCatalog from "@/components/BookingCatalog";
import { BookingJson } from "../../../interface";
import { Suspense } from "react";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function shops() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

  const books = await getBookings(session.user.token);

  return (
      <main className="p-5 text-center">
        <div className="bg-white h-[5px] mt-[20px] mb-[20px] w-[80%] sm:w-[60%] md:w-[50%] m-auto rounded-xl"></div>
        <BookingCatalog BookingJson={books}></BookingCatalog>
      </main>
  );
}