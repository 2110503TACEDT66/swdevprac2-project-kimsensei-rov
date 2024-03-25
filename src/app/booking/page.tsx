"use client"
import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interface";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function booking(){

    

    const [bookingDate,setbookingDate] = useState<Dayjs|null>(null)
    const [hospital,setHospital] = useState<string|null>("Chula")
    const [name,setName] = useState<string|null>(null)
    const [id,setId] = useState<string|null>(null)
    const [surname,setSurname] = useState<string|null>(null)
    const [roomtype,setRoomtype] = useState<string|null>("Single")

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if (id && name && bookingDate && surname && hospital && roomtype) {
            const item: BookingItem = {
                name: name,
                surname: surname,
                id: id,
                hospital: hospital,
                roomtype: roomtype,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD")
            };
            dispatch(addBooking(item));
            alert("booking add");
        } else {
            // Handle the case where any of the variables are null
            alert("Please fill in all the required fields.");
        }
    };
    





    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-16">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="w-fit space-y-2">
                Make A Reservation
                <DateReserve 
    onDateChange={(value: Dayjs) => { setbookingDate(value) }} 
    nam={(value: string) => { setName(value) }}
    sur={(value: string) => { setSurname(value) }}
    id={(value: string) => { setId(value) }}
    hos={(value: string) => { setHospital(value) }}
    room={(value:string) => {setRoomtype(value)}}
/>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white" name="Book Vaccine" onClick={makeBooking}> Make Reservation</button>
        </main>
    );
}