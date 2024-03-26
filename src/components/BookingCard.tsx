"use client"

import InteractiveCard from './InteractiveCard';
import Image from 'next/image';
import { Rating } from '@mui/material';
import deleteAppointment from '@/libs/deleteBooking';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import fordelete from './fordelete';

interface BookingCardProps {
    bookingBegins: Date;
    bookingEnds: Date;
    roomTypes: string;
    users: string;
    hotels: string;
    id:string
}

export default async function BookingCard({ bookingBegins, bookingEnds, roomTypes, users, hotels,id }: BookingCardProps) {
    


    
    return (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" >
                    <div className="text-xl">BookingId: {id} </div>
                    <div className="text-xl">hotels: {hotels} </div>
                    <div className="text-xl">users: {users} </div>
                    <div className="text-xl">Begin: {bookingBegins.toLocaleString()}</div>
                    <div className="text-xl">End: {bookingEnds.toLocaleString()}</div>
                    <div className="text-xl">roomType: {roomTypes}</div>
                    
                    
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
                    text-white shadow-sm" onClick={()=>fordelete(id)}>
                        Remove from List
                    </button>
                </div>
    );
}