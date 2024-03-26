"use client"

import fordelete from './fordelete';
import EditInput from '../app/Edit/EditInput';
import Link from 'next/link';
import { Button } from '@mui/material';

interface BookingCardProps {
    bookingBegins: Date;
    bookingEnds: Date;
    roomTypes: string;
    users: string;
    hotels: string;
    id: string
}

export default function BookingCard({ bookingBegins, bookingEnds, roomTypes, users, hotels, id }: BookingCardProps) {




    return (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" >
            <div className="text-xl">BookingId: {id} </div>
            <div className="text-xl">hotels: {hotels} </div>
            <div className="text-xl">users: {users} </div>
            <div className="text-xl">Begin: {bookingBegins.toLocaleString()}</div>
            <div className="text-xl">End: {bookingEnds.toLocaleString()}</div>
            <div className="text-xl">roomType: {roomTypes}</div>
            <div className='flex flex-row items-center my-2'>
                <Button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 mx-2
                    text-white shadow-sm" onClick={() => fordelete(id)}>
                    Remove from List
                </Button> 
                <Button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 mx-2
                    text-white shadow-sm" href={`/Edit?id=${id}`}>
                    Edit Booking
                </Button>
            </div>  
        </div>
    );
}