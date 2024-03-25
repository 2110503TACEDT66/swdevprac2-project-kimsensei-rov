"use client"
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { BookingItem } from "../../../interface";
import { useState } from "react";
import getHos from "./post";
export default function booking() {

    const [bookingBegin, setbookingBegin] = useState<Dayjs | null>(null)
    const [bookingEnd, setbookingEnd] = useState<Dayjs | null>(null)
    const [roomtype, setRoomtype] = useState<string | null>("Single")
    const [hospital, setHospital] = useState<string | null>("Chula")
    const [name, setName] = useState<string | null>(null)
    const [surname, setSurname] = useState<string | null>(null)
    const [id, setId] = useState<string | null>(null)


    const makeBooking = () => {
        // find _id of hospitals by hospital name
        console.log(bookingBegin, bookingEnd, roomtype, hospital, name)
        if (bookingBegin && bookingEnd && roomtype && hospital && name) {
            const item: BookingItem = {
                bookingBegin: dayjs(bookingBegin),
                bookingEnd: dayjs(bookingEnd),
                roomType: roomtype,
                user: "65e56e595d19af11f393293e",
                hotel: "65e2ec5f9fdb24c50e8eb620" 
            };
            getHos({ item })
        } else {
            // Handle the case where any of the variables are null
            alert("Please fill in all the required fields.");
        }
    };






    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-16">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="w-fit space-y-2">
                Make A Reservation
                <DateReserve
                    date_begin={(value: Dayjs) => { setbookingBegin(value) }}
                    date_end={(value: Dayjs) => { setbookingEnd(value) }}
                    nam={(value: string) => { setName(value) }}
                    sur={(value: string) => { setSurname(value) }}
                    id={(value: string) => { setId(value) }}
                    hos={(value: string) => { setHospital(value) }}
                    room={(value: string) => { setRoomtype(value) }}
                />
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white" name="Book Vaccine" onClick={makeBooking}> Make Reservation</button>
        </main>
    );
}