import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "../api/auth/[...nextauth]/route"
import postBooking from "@/libs/postBooking"
import { getServerSession } from "next-auth"
import { BookingItem } from "../../../interface"

export default async function getHos({item}: {item: BookingItem}) {
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    postBooking(item, profile.token)
    alert("booking add");
}