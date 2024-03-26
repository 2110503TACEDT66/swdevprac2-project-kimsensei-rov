"use server"

import deleteAppointment from '@/libs/deleteBooking';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function fordelete(id:string){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null;
    const token = session.user.token;
    deleteAppointment(id,token)
}
