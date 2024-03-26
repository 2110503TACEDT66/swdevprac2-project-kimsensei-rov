import Link from "next/link";
import Card from "./Card";
import { BookingItem,BookingJson } from "../../interface";
import BookingCard from "./BookingCard";


export default async function BookingCatalog({BookingJson} : {BookingJson:BookingJson}) {

    const hospitalJsonReady = await BookingJson

    return (
        <>
        <div style={{margin:"20px",display:"flex",
            flexDirection:"row",alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap"}}>
        {
            hospitalJsonReady.data.map((BookingItem:BookingItem)=>(
                <BookingCard bookingฺBegins={BookingItem.bookingBegin}
                bookingEnds={BookingItem.bookingEnd} roomTypes={BookingItem.roomType} 
                users={BookingItem.roomType} hotels={BookingItem.hotel} />
            ))
        }
     </div>
        </>
    )
}