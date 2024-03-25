'use client'
import {DatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { Select,MenuItem,TextField } from '@mui/material'
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateReserve({onDateChange,nam,sur,id,hos,room}
    :{onDateChange:Function,nam:Function,sur:Function,id:Function,hos:Function,room:Function}){

    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
    const [hospital,setHospital] = useState<string|null>("Chula")
    const [name, setName] = useState<string|null>(null);
    const [surname, setSurname] = useState<string|null>(null);
    const [Id, setId] = useState<string|null>(null);
    const [roomtype, setRoomtype] = useState<string|null>("Single");
    

    return (
        <div className="bg-slate-100 rounded-lg space-x-5  w-fit px-10 py-5 flex flex-row justify-center items-center">
            <TextField value={name} variant="standard" name="Name" label="Name" onChange={(e)=>{setName(e.target.value);nam(e.target.value)}} />
            <TextField value={surname} variant="standard" name="Lastname" label="Lastname" onChange={(e)=>{setSurname(e.target.value);sur(e.target.value)}} />
            <TextField value={Id} variant="standard" name="Citizen ID" label="Citizen ID" onChange={(e)=>{setId(e.target.value);id(e.target.value)}}/>
            <Select value={hospital} variant="standard" id="hospital" name="hospital" className="h-[2em] w-[250px]" onChange={(e)=>{setHospital(e.target.value);hos(e.target.value)}}>
                <MenuItem value="Kimsensei1">Kimsensei1</MenuItem>
                <MenuItem value="Kimsensei2">Kimsensei2</MenuItem>
                <MenuItem value="Kimsensei3">Kimsensei3</MenuItem>
            </Select>
            <Select value={roomtype} variant="standard" id="roomtype" name="roomtype" className="h-[2em] w-[250px]" onChange={(e)=>{setRoomtype(e.target.value);room(e.target.value)}}>
                <MenuItem value="Single">Single Room</MenuItem>
                <MenuItem value="Twin">Twin Bedroom</MenuItem>
                <MenuItem value="Suite">Suite Room</MenuItem>
            </Select>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={bookingDate}
                onChange={(value)=>{setBookingDate(value);onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    );
}