'use client'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem, TextField } from '@mui/material'
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateReserve({ date_begin, date_end, nam, sur, id, hos, room }
    : { date_begin: Function, date_end: Function, nam: Function, sur: Function, id: Function, hos: Function, room: Function }) {
    // State ref from bookItem in interface.ts
    const [bookingBegin, setBookingBegin] = useState<Dayjs | null>(null)
    const [bookingEnd, setBookingEnd] = useState<Dayjs | null>(null)
    const [roomtype, setRoomtype] = useState<string | null>('')
    const [hospitId, setHospitalId] = useState<string | null>('')
    const [name, setName] = useState<string | null>(null)
    const [surname, setSurname] = useState<string | null>(null)

    return (
        // Date picker for booking date and end date using MUI DatePicker
        <div className="flex flex-col space-y-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Booking Date"
                    value={bookingBegin}
                    onChange={(newValue) => {
                        setBookingBegin(newValue)
                        date_begin(newValue)
                    }}
                />
                <DatePicker
                    label="Booking End Date"
                    value={bookingEnd}
                    onChange={(newValue) => {
                        setBookingEnd(newValue)
                        date_end(newValue)
                    }}
                />
            </LocalizationProvider>
            {/* Input field for name and surname */}
            <TextField
                label="Name"
                value={name}
                onChange={(e) => { setName(e.target.value); nam(e.target.value)}}
            />
            <TextField
                label="Surname"
                value={surname}
                onChange={(e) => { setSurname(e.target.value); sur(e.target.value)}}
            />
            {/* Select field for hospital */}
            <Select
                label="Hospital"
                value={hospitId}
                onChange={(e) => { setHospitalId(e.target.value); hos(e.target.value) }}
            >
                <MenuItem value="Kimsensei1">Kimsensei1</MenuItem>
                <MenuItem value="Kimsensei2">Kimsensei2</MenuItem>
                <MenuItem value="Kimsensei3">Kimsensei3</MenuItem>
            </Select>
            <Select
                label="Room Type"
                value={roomtype}
                onChange={(e) => { setRoomtype(e.target.value); room(e.target.value)}}
            >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Double">Double</MenuItem>
                <MenuItem value="Suite">Suite</MenuItem>
            </Select>
        </div>
    );
}