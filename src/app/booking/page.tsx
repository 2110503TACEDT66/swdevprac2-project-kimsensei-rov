"use client"
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { BookingItem } from "../../../interface";
import { useState } from "react";
import getHos from "./post";
import { getServerSession } from "next-auth";
import { Button } from "@mui/material";
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
                bookingBegin: dayjs(bookingBegin).toDate(),
                bookingEnd: dayjs(bookingEnd).toDate(),
                roomType: roomtype,
                user: "65e56e595d19af11f393293e",
                hotel: hospital 
            };
            getHos({ item })
        } else {
            // Handle the case where any of the variables are null
            alert("Please fill in all the required fields.");
        }
    };






    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center my-5">Booking</h1>
                <DateReserve
                    date_begin={setbookingBegin}
                    date_end={setbookingEnd}
                    nam={setName}
                    sur={setSurname}
                    id={setId}
                    hos={setHospital}
                    room={setRoomtype}
                />
                <Button
                    onClick={makeBooking}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-center w-full"
                    href='/'
                >
                    Book
                </Button>
            </div>
        </div>
    );
}