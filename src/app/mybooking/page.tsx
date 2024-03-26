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
      <main >
        <BookingCatalog BookingJson={books}></BookingCatalog>
      </main>
  );
}