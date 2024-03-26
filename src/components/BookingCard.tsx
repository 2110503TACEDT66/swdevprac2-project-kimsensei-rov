'use client'
import InteractiveCard from './InteractiveCard';
import Image from 'next/image'
import { Rating} from '@mui/material';
import { useState } from 'react';


export default function BookingCard({ bookingฺBegins,bookingEnds,roomTypes,users,hotels}:
    {bookingฺBegins:string,bookingEnds:string,roomTypes:string,users:string,hotels:string}){
    
    

    return(
    <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
            </div>
            <div className='w-full h-[20%] p-[10px]'>{bookingฺBegins}</div>
            <div className='w-full h-[20%] p-[10px]'>{bookingEnds}</div>
            <div className='w-full h-[20%] p-[10px]'>{roomTypes}</div>
            <div className='w-full h-[20%] p-[10px]'>{users}</div>
            <div className='w-full h-[20%] p-[10px]'>{hotels}</div>
    </InteractiveCard>
    );
}