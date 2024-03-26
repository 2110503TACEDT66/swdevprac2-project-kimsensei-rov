'use client'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem, TextField } from '@mui/material'
import BookingUpdate from '../../components/BookingUpdate'
import { useState } from "react"
import dayjs, { Dayjs } from 'dayjs'

export default function EditInput({ bookingID }: { bookingID: string }) {
    // State ref from bookItem in interface.ts
    const [bookingBegin, setBookingBegin] = useState<Dayjs | null>(null)
    const [bookingEnd, setBookingEnd] = useState<Dayjs | null>(null)
    const [roomtype, setRoomtype] = useState<string | null>(null)
    const [hotel, setHospital] = useState<string | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [surname, setSurname] = useState<string | null>(null)

    const update = () => {
        if (bookingBegin && bookingEnd && roomtype && hotel && name && surname) {
            BookingUpdate(dayjs(bookingBegin).toDate(), dayjs(bookingEnd).toDate(), roomtype, hotel, bookingID)
        } else {
            // Handle the case where any of the variables are null
            alert("Please fill in all the required fields.");
        }
    }


    return (
        // create a form to update the booking
        // style the form with tailwindcss and mui like register and login page
        // use MUI form components like TextField, DatePicker, Select, MenuItem
        // modernize the form with mui and use sky color bg color like register and login page

        <div className="flex flex-col items-center justify-center">
            <div className="bg-sky-200 p-5 rounded-md">
                <h1 className="text-3xl font-bold text-center">Edit Booking</h1>
                <div className="flex flex-col">
                    <TextField
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Surname"
                        variant="outlined"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Booking Begin"
                            value={bookingBegin}
                            onChange={(newValue) => setBookingBegin(newValue)}
                        />
                        <DatePicker
                            label="Booking End"
                            value={bookingEnd}
                            onChange={(newValue) => setBookingEnd(newValue)}
                        />
                    </LocalizationProvider>
                    <Select
                        label="Room Type"
                        value={roomtype}
                        onChange={(e) => setRoomtype(e.target.value)}
                    >
                        <MenuItem value="Single">Single</MenuItem>
                        <MenuItem value="Double">Double</MenuItem>
                        <MenuItem value="Suite">Suite</MenuItem>
                    </Select>
                    <Select
                        label="Hotel"
                        value={hotel}
                        onChange={(e) => setHospital(e.target.value)}
                    >
                        <MenuItem value="65e6c853023fc52fe87a6ed8">Kimsensei1</MenuItem>
                        <MenuItem value="65e6c94e023fc52fe87a6ee4">Kimsensei2</MenuItem>
                        <MenuItem value="65e2ec5f9fdb24c50e8eb620">Kimsensei3</MenuItem>
                    </Select>
                    <button className="bg-sky-600 text-white px-3 py-1 rounded-md" onClick={update}>Update</button>
                </div>
            </div>
        </div>
    );
}