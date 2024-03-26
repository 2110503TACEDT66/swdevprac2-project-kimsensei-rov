import InteractiveCard from './InteractiveCard';
import Image from 'next/image';
import { Rating } from '@mui/material';

interface BookingCardProps {
    bookingBegins: Date;
    bookingEnds: Date;
    roomTypes: string;
    users: string;
    hotels: string;
}

export default function BookingCard({ bookingBegins, bookingEnds, roomTypes, users, hotels }: BookingCardProps) {
    return (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" >
                    <div className="text-xl">Begin {bookingBegins.toLocaleString()}</div>
                    <div className="text-sm">End {bookingEnds.toLocaleString()}</div>
                    <div className="text-sm">roomType {roomTypes}</div>
                    <div className="text-md">users: {users} </div>
                    <div className="text-md">hotels: {hotels} </div>
                    
                </div>
    );
}