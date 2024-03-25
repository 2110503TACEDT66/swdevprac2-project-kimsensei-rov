"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList () {
    const bookItems =  useAppSelector((state)=> state.bookSlice.bookItems)
    const dispatch =  useDispatch<AppDispatch>()


    if(bookItems.length === 0){
        return (<div className="text-5xl text-center h-fit mt-[20%]"> No Reservation </div>)
    }

    return (
        <>
        {
            bookItems.map((bookingItem)=> (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.id}>
                    <div className="text-xl">Name: {bookingItem.name}</div>
                    <div className="text-xl">Surname: {bookingItem.surname}</div>
                    <div className="text-xl">Id: {bookingItem.id}</div>
                    <div className="text-xl">Hotel: {bookingItem.hospital}</div>
                    <div className="text-xl">roomtype: {bookingItem.roomtype}</div>
                    <div className="text-xl">Date: {bookingItem.bookDate}</div>
                    
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
                    text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem.id))}>
                        Remove from List
                    </button>
                </div>
            ))
        }
        </>
    )
}